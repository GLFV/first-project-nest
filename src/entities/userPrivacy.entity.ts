import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserPrivacy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: number;

  @Column()
  mail: string;

  @Column()
  password: string;
}
