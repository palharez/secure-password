import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { PasswordService } from '../services';
import { PasswordDTO } from '../interfaces';

@Controller('')
export class PasswordController {
  constructor(private passwordService: PasswordService) {}

  @Post('validate-password')
  validate(@Body() data: PasswordDTO) {
    return this.passwordService.validate(data);
  }
}