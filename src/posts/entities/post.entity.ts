import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@ObjectType()
@Entity('posts')
export class Post {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id:number;

    @Field({nullable:true})
    @Column({nullable:true})
    title:string

    @Field()
    @Column()
    content:string

    @ManyToOne((type) => User, (author) => author.posts)
    @Field((type) => User)
    author:User

    @Field()
    @CreateDateColumn()
    createdAt:Date

    @Field()
    @UpdateDateColumn()
    updateAt:Date
}
