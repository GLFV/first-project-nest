import { Session } from '../entities/session.entity';
import { Animal } from './../entities/animal.entity';
import { UserController } from './user.controller';
import UserService from './user.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    // I think, you won't need Animal in auth module
    TypeOrmModule.forFeature([User, Session, Animal]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
