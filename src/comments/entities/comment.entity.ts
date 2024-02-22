import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  post_id: number;

  @Column({ default: 'Fulano de Tal' })
  userName: string;

  @Column()
  content: string;
}
