import { InputType, Field } from '@nestjs/graphql'
import { IsNotEmpty, Length } from 'class-validator'

@InputType()
export class CreateStoreInput {
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
}
