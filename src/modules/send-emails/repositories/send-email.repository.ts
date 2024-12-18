import { SendEmailDto } from '../dtos/send-email.dto';

export abstract class SendEmailRepository {
  abstract send(data: SendEmailDto): Promise<void>;
}
