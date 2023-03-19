import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { User } from '../users/entities/user.entity';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    createPostDto.user = await this.userRepository.findOneBy({
      id: createPostDto.userId,
    });
    if (!createPostDto.user)
      throw new BadRequestException('User not found with provided UserID.');
    delete createPostDto.userId;
    const post = await this.postRepository.save(createPostDto);
    console.log(post.user);
    delete post.user;
    return post;
  }

  async findAll() {
    return await this.postRepository.find();
  }

  async findOne(id: string) {
    return await this.postRepository.findOneBy({ id });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
