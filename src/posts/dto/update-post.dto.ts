import { PartialType } from '@nestjs/swagger';
import { Field, InputType } from '@nestjs/graphql';


export class UpdatePostDto{
    @Field()
    title?:string

    @Field()
    content?:string

    @Field()
    author?:number
}
