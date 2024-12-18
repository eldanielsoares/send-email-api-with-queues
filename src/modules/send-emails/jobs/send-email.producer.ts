import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { SendEmailDto } from '../dtos/send-email.dto';

@Injectable()
export class SendEmailProducerQueue {
  constructor(@InjectQueue('SEND_EMAIL') private readonly queue: Queue) {}

  async sendEmail(data: SendEmailDto) {
    await this.queue.add('sendEmailJob', data);
  }
}
