import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'Hector Teste' })
  userName: string;

  @Column()
  content: string;

  @CreateDateColumn()
  posted_at: Date;

  @Column({ default: false })
  liked: boolean;

  constructor(post: Partial<Post>) {
    Object.assign(this, post);
  }
}
