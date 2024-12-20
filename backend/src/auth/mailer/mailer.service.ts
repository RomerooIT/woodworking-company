import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

interface AuthMail {
  name: string;
  surname: string;
  email: string;
  redirectUri: string;
}

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendAuthMail(params: AuthMail) {
    const { email, name, surname, redirectUri } = params;

    // Заменяем https на http в redirectUri
    const modifiedRedirectUri = redirectUri.replace('https://', 'http://');

    // Отправляем письмо с измененной ссылкой
    await this.mailerService.sendMail({
      to: email,
      subject: 'TreeShop',
      template: './auth-message', // `.hbs` extension is appended automatically
      context: {
        redirectUri: modifiedRedirectUri, // Передаем измененную ссылку в шаблон
        name,
        surname,
      },
    });
  }
}
