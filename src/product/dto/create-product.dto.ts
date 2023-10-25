import { Field, InputType, Int } from "@nestjs/graphql"
import { Category } from "../../category/entities/category.entity"

@InputType()
export class CreateProductDto {
    @Field({nullable:true})
    name:string

    @Field()
    image:string

    @Field()
    price:number

    @Field((type) => Int, {nullable:true})
    category:Category
}
