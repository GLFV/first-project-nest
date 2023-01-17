import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export default class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async registration(definition: DeepPartial<User>): Promise<User> {
    const { email, username, password, firstName, lastName, phone } =
      definition;
    const candidate = await this.usersRepository.findOne({
      where: [{ email: email }, { username: username }],
    });
    if (candidate) {
      if (candidate.username === username && candidate.email !== email) {
        throw new Error(`username ${username} is already taken `);
      } else {
        throw new Error(`email ${email} is already  taken`);
      }
    }
    const hashPassword = bcrypt.hashPassword(password, 13);
    const newUser = this.usersRepository.create({
      email,
      password: hashPassword,
      username,
      firstName,
      lastName,
      phone,
    });
    return this.usersRepository.save(newUser);
  }
}
