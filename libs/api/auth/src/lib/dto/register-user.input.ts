import { InputType, Field } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, Length, Min } from 'class-validator'

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsNotEmpty()
  @Length(3, 191)
  firstName: string

  @Field(() => String)
  @IsNotEmpty()
  @Length(3, 191)
  lastName: string

  @Field(() => String)
  @IsNotEmpty()
  @IsEmail()
  email: string

  @Field(() => String)
  @IsNotEmpty()
  @Length(3, 191)
  country: string

  @Field(() => String)
  @IsNotEmpty()
  @Min(8)
  mobile: string

  @Field(() => String)
  @IsNotEmpty()
  @Min(8)
  password: string
}
