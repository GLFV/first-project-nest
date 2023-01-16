import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;

  // What fot is this column?
  // Maybe you should add User
  @Column()
  animal: string;

  @Column()
  name: string;

  @Column()
  kind: string;

  @Column()
  breed: string;
}
