import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserPrivacy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  animal: string;
}
