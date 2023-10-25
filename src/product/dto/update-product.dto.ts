import { PartialType } from '@nestjs/swagger';
import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class UpdateProductDto {
    @Field({nullable:true})
    name?:string

    @Field()
    image?:string

    @Field()
    price?:number

}
