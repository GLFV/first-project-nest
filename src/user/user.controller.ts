import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RegisterDto } from 'src/dtos/register.dto';

import UserService from './user.service';

// TODO: rename files to auth.module, auth.controller, auth.service
@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    await this.userService.registration(registerDto);
  }

  @Get('getUsers')
  async getUsers() {
    const users = await this.userService.getUsers();
    return users;
  }

  @Get('getUser/:username')
  async getUser(@Param('username') username: string) {
    const user = await this.userService.getUser(username);
    return user;
  }
}
