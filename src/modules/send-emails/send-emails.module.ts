import { Module } from '@nestjs/common';
import { SendEmailsController } from './send-emails.controller';
import { SendEmailUseCase } from './use-cases/send-email.use-case';
import { SendEMailMailer } from './repositories/send-email-mailer.repository';
import { SendEmailRepository } from './repositories/send-email.repository';
import { SendEmailProducerQueue } from './jobs/send-email.producer';
import { SendEmailConsumer } from './jobs/send-email.consumer';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [BullModule.registerQueue({ name: 'SEND_EMAIL' })],
  controllers: [SendEmailsController],
  providers: [
    SendEmailUseCase,
    SendEMailMailer,
    SendEmailProducerQueue,
    SendEmailConsumer,
    {
      provide: SendEmailRepository,
      useClass: SendEMailMailer,
    },
  ],
})
export class SendEmailsModule {}
