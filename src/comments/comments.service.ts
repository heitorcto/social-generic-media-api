import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    return this.commentRepository.save(createCommentDto);
  }

  async findAll(post_id: number) {
    return this.commentRepository.find({
      where: {
        post_id: post_id,
      },
    });
  }

  async findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  async remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
