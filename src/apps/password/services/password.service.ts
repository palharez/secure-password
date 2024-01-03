import { Injectable, Logger } from '@nestjs/common';

import { PasswordDTO } from '../interfaces';

@Injectable()
export class PasswordService {
  constructor() {}

  private readonly logger = new Logger(PasswordService.name);

  async validate(data: PasswordDTO) { 
    this.logger.log(`validate method called`);
  }

}