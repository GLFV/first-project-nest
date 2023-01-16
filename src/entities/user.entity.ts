import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Session } from './session.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  nickName: string;

  @Column()
  phone: number;

  // maybe email ?)
  @Column()
  mail: string;

  @Column()
  password: string;
}
