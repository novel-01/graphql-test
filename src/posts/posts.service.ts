import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post)
  private readonly userRepo: Repository<Post>,){}

  create(createPostDto: CreatePostDto, author:User):Promise<Post>  {
    const newPost = this.userRepo.create({...createPostDto, author});
    return this.userRepo.save(newPost)
  }

  findAll():Promise<Post[]> {
    return this.userRepo.find({relations:['author']})
  }
}
