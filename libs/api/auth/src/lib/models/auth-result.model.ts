import { Field, ObjectType } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'
import User from './user.model'

@ObjectType()
export class AuthResult {
  @Field(() => String)
  @IsNotEmpty()
  token: string

  @Field(() => User)
  user: User
}

export default AuthResult
