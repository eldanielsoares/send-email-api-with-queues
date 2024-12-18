import { Body, Controller, Post } from '@nestjs/common';
import { SendEmailUseCase } from './use-cases/send-email.use-case';
import { SendEmailDto } from './dtos/send-email.dto';

@Controller('send-emails')
export class SendEmailsController {
  constructor(private readonly sendEmailUseCase: SendEmailUseCase) {}

  @Post()
  async sendEmail(@Body() data: SendEmailDto) {
    await this.sendEmailUseCase.execute(data);

    return { message: 'email sent successfully' };
  }
}
