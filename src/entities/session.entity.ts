import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Do you really need such entity?
// Maybe it would be better to move phone, email, password to User
// and replace UserPrivacy with Session entity:
//    accessToken, refreshToken and ManyToOne relation with User
// I think user can have multiple sessions on different devices
@Entity()
export class UserPrivacy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accessToken: string;

  @Column()
  refreshToken: string;
}
