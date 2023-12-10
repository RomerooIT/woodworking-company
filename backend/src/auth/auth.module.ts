import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { AuthController } from './controller';
import { AuthService } from './repository';
import { AuthRepository } from './repository/auth.repository';
import { EmailService } from './mailer';
import { RefreshJwtMiddleware } from './middlewares';
import { UsersModule } from '../users';
import { resolve } from 'path';
import { RefreshTokensRepository } from './repository/refresh-tokens.repository';
import { SessionModule } from '../sessions/session.module';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthRepository,
    EmailService,
    RefreshTokensRepository,
  ],
  imports: [
    UsersModule,
    SessionModule,
    JwtModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'igrakkaunt@gmail.com',
          pass: 'nbcroowkjsdyewxd',
        },
      },
      defaults: {
        from: '"Gallery Support',
      },
      template: {
        dir: resolve(process.cwd(), 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RefreshJwtMiddleware).forRoutes('*');
  }
}
