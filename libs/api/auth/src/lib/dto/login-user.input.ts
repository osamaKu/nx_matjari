import { InputType, Field } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, Min } from 'class-validator'

@InputType()
export class LoginUserInput {
  @Field(() => String)
  @IsNotEmpty()
  @IsEmail()
  email: string

  @Field(() => String)
  @IsNotEmpty()
  @Min(8)
  password: string
}
