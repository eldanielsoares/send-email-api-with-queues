import { Injectable } from '@nestjs/common';
import { SendEmailRepository } from '../repositories/send-email.repository';
import { SendEmailDto } from '../dtos/send-email.dto';
import { SendEmailProducerQueue } from '../jobs/send-email.producer';

@Injectable()
export class SendEmailUseCase {
  constructor(private readonly sendEmailProducer: SendEmailProducerQueue) {}

  async execute(data: SendEmailDto): Promise<void> {
    await this.sendEmailProducer.sendEmail(data);
  }
}
