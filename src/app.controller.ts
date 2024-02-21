import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//for api calls
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/testing')
  testing(): string {
    return 'this is test';
  }
}
