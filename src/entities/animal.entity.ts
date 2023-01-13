import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  animal: string;

  @Column()
  name: string;

  @Column()
  kind: string;

  @Column()
  breed: string;
}
