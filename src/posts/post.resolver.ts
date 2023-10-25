import { Controller } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { UsersResolver } from '../users/users.resolver';
import { Args, Mutation, Query } from '@nestjs/graphql';
import { Post } from './entities/post.entity';

@Controller('posts')
export class PostsResolver {
  constructor(private readonly postsService: PostsService, private readonly userResolver:UsersResolver) {}

  @Mutation(() => Post)
  async createPost(@Args('createPost') createPostDto: CreatePostDto, @Args('authorID') authorID:number) {
    const author = await this.userResolver.getOneUser(authorID)
    return this.postsService.create(createPostDto, author);
  }

  @Query(() => [Post])
  findAllPosts() {
    return this.postsService.findAll();
  }
}
