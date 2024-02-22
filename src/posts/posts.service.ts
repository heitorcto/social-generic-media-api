import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    return this.postRepository.save(createPostDto);
  }

  async findAll() {
    return this.postRepository.find({
      order: {
        posted_at: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    return this.postRepository.findOneBy({ id });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post = await this.postRepository.findOneBy({ id });

    post.userName = updatePostDto.userName;
    post.content = updatePostDto.content;
    post.liked = updatePostDto.liked;

    await this.postRepository.save(post);
  }

  async remove(id: number) {
    return this.postRepository.delete(id);
  }
}
