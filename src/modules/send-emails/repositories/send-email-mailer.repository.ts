import { MailerService } from '@nestjs-modules/mailer';
import { SendEmailDto } from '../dtos/send-email.dto';
import { SendEmailRepository } from './send-email.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SendEMailMailer implements SendEmailRepository {
  constructor(private readonly mailerService: MailerService) {}

  async send(data: SendEmailDto): Promise<void> {
    return this.mailerService.sendMail({
      to: data.email,
      from: 'Send email api <monty.stoltenberg@ethereal.email>',
      subject: 'Testing Nest MailerModule ✔',
      text: data.content,
    });
  }
}
