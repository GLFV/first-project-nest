import { Controller, Get } from '@nestjs/common';

import { UserService } from './user.service';

// TODO: rename files to auth.module, auth.controller, auth.service
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
}
