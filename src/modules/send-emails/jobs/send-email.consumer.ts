import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { SendEmailDto } from '../dtos/send-email.dto';
import { SendEmailRepository } from '../repositories/send-email.repository';
import { Logger } from '@nestjs/common';

@Processor('SEND_EMAIL')
export class SendEmailConsumer {
  logger: Logger = new Logger();

  constructor(private readonly sendEMailRepository: SendEmailRepository) {}

  @Process('sendEmailJob')
  async sendEmailJob(job: Job<SendEmailDto>) {
    this.logger.log('Um job foi executado');

    return this.sendEMailRepository.send(job.data);
  }
}
