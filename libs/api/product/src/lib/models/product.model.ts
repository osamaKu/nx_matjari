import { Field, ObjectType } from '@nestjs/graphql'
import { IsNotEmpty, Length, IsOptional } from 'class-validator'

@ObjectType()
export class Product {
  @Field({ nullable: true })
  @IsOptional()
  id?: string

  @Field(() => String)
  @IsNotEmpty()
  @Length(3, 191)
  name: string

  @Field(() => String)
  @IsNotEmpty()
  @Length(3, 191)
  slug: string

  @Field(() => String)
  @IsNotEmpty()
  @Length(3, 191)
  description: string

  @Field(() => Number)
  @IsNotEmpty()
  @Length(3, 191)
  price: number

  @Field(() => String)
  @IsNotEmpty()
  @Length(3, 191)
  thumbnail_url: string
}

export default Product
