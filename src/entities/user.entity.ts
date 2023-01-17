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
  username: string;

  @Column()
  phone: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
