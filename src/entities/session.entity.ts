import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

// Do you really need such entity?
// Maybe it would be better to move phone, email, password to User
// and replace UserPrivacy with Session entity:
//    accessToken, refreshToken and ManyToOne relation with User
// I think user can have multiple sessions on different devices

// You can remove my 'todo' comments :)
@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  // TODO: Read about onDelete options and cascades:
  // https://orkhan.gitbook.io/typeorm/docs/relations
  @ManyToOne(() => User, (user) => user.sessions, { onDelete: 'CASCADE' })
  // TODO: Read about JoinColumn & JoinTale
  @JoinColumn()
  user: User;

  @Column()
  accessToken: string;

  @Column()
  refreshToken: string;
}
