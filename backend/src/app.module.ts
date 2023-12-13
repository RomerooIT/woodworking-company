import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { ConfigInterface, loaders } from '../config';
import { JwtMiddleware } from './auth/middlewares';

import { UsersModule } from './users';
import { AuthModule } from './auth';


import { UserEntity } from './users/entity/user.entity';
import { AuthEntity } from './auth/entity/auth.entity';


import { RedisModule } from '@nestjs-modules/ioredis';
import { RefreshTokenEntity } from './auth/entity/refreshTokens.entity';
import { SessionEntity } from './sessions/session.entity';
import { SessionModule } from './sessions/session.module';
import { BasketEntity } from './basket/basket.entity';
import { ProductEntity } from './product/product.entity';
import { SupportEntity } from './support/support.entity';
import { WorkerEntity } from './worker/worker.entity';
import { BasketModule } from './basket/basket.module';
import { RequestEntity } from './request/request.entity';
import { RequestModule } from './request/request.module';
import { ProductModule } from './product/product.module';
import { SupportModule } from './support/support.module';
import { WorkerModule } from './worker/worker.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: loaders,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService<ConfigInterface>) => {
        const { host, password, port, username } = config.get('postgres');

        return {
          synchronize: true,
          port,
          host,
          type: 'postgres',
          migrations: [],
          entities: [
            RefreshTokenEntity,
            SessionEntity,
            UserEntity,
            AuthEntity,
           // BasketEntity,
            RequestEntity,
            ProductEntity,
            SupportEntity,
            WorkerEntity
          ],
          username,
          password,
        };
      },
      inject: [ConfigService],
    }),
    EventEmitterModule.forRoot({
      global: true,
      newListener: true,
      removeListener: true,
      verboseMemoryLeak: true,
    }),
    UsersModule,
    AuthModule,
    JwtModule,
    SessionModule,
   // BasketModule,
    RequestModule,
    ProductModule,
    SupportModule,
    WorkerModule,
    RedisModule.forRoot({
      config: {
        url: 'redis://localhost:8379',
      },
    }),
  ],
  providers: [JwtMiddleware],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes('*');
  }
}
