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

    await this.checkCandidate(username, email);

    const hashPassword = await bcrypt.hash(password, 10);

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

  async exist(filter: DeepPartial<User>): Promise<boolean> {
    const query = this.getQuery(filter);

    const count = await query.getCount();

    return !!count;
  }

  getQuery(filter: DeepPartial<User>) {
    const query = this.usersRepository.createQueryBuilder('user');

    if (filter.email) {
      query.where({ email: filter.email });
    }

    if (filter.username) {
      query.where({ username: filter.username });
    }

    if (filter.id) {
      query.where({ id: filter.id });
    }

    if (filter.firstName) {
      query.where({ firstName: filter.firstName });
    }

    if (filter.lastName) {
      query.where({ lastName: filter.lastName });
    }

    return query;
  }

  async checkCandidate(username: string, email: string): Promise<void | Error> {
    const query = this.getQuery({ username, email });

    const candidate = await query.getOne();

    if (candidate) {
      if (candidate.username === username && candidate.email !== email) {
        throw new Error(`username ${username} is already taken `);
      } else {
        throw new Error(`email ${email} is already  taken`);
      }
    }
  }

  async getUser(username: string): Promise<User> {
    return this.usersRepository.findOne({
      where: { username: username },
      select: ['username', 'firstName', 'lastName', 'email', 'phone'],
    });
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({
      select: ['username', 'firstName', 'lastName', 'email', 'phone'],
    });
  }
}
