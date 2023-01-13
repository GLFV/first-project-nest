import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// TODO: rename file to animal.entity.ts

@Entity()
// TODO: rename to Animal
// TODO: add more fields like name/nickname(as you want) kind(cat/dog...), breed(dalmatian, bulldog...) etc.
export class UserAnimal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  animal: string;
}
