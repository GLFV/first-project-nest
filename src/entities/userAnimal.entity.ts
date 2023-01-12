import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserAnimal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  animal: string;
}
