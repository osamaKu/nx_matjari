import { Field, ObjectType } from '@nestjs/graphql'
import { IsNotEmpty, Length, ValidateNested, IsOptional } from 'class-validator'
import { Product } from '@v2matjari/api/product'

@ObjectType()
export class Store {
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
  description: string

  @Field(() => String)
  @IsNotEmpty()
  @Length(3, 191)
  url: string

  @Field(() => [Product], { nullable: true })
  @ValidateNested()
  @IsOptional()
  products?: [Product]
}

export default Store
