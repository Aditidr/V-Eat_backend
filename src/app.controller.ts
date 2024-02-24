import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { TestDto } from './feature/users/users.dto';
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
