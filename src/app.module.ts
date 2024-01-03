import { Module } from '@nestjs/common';
import { PasswordModule } from './apps/password/password.module';

@Module({
  imports: [PasswordModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
