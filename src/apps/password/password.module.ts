import { Module } from '@nestjs/common';

import { PasswordController } from './controllers/password.controller';
import { PasswordService } from './services/password.service';

@Module({
  imports: [],
  controllers: [PasswordController],
  providers: [PasswordService],
})
export class PasswordModule {}
