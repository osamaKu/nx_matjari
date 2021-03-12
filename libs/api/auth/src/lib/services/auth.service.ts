import { Injectable, BadRequestException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { ApiDataService } from '@v2matjari/api/data'
import { CreateUserInput } from '../dto/register-user.input'
import { AuthHelper } from '../auth.helper'
import AuthResult from '../models/auth-result.model'
import User from '../models/user.model'
import { JwtDto } from '../dto/jwt.dto'

@Injectable()
export class AuthService {
  constructor(private readonly data: ApiDataService, private jwt: JwtService) {}

  public async registerUser(createUserInput: CreateUserInput): Promise<AuthResult> {
    // check unique email

    const existEmail = await this.data.findUserByEmail(createUserInput.email)

    if (existEmail) {
      throw new BadRequestException(`Cannot register with email ${createUserInput.email}, Email already in use`)
    }

    const password = await AuthHelper.hash(createUserInput.password)

    const newUser: User = await this.data.user.create({
      data: {
        ...createUserInput,
        password,
      },
    })

    const token: string = this.signToken(newUser.id)

    const result = {
      user: newUser,
      token,
    }

    return result
  }

  /**
   *
   * @param userId
   * @returns promise user obj
   */
  public async validateUser(userId: number): Promise<User> {
    return await this.data.findUserById(userId)
  }

  private signToken(id: number) {
    const payload: JwtDto = { userId: id }

    return this.jwt.sign(payload)
  }
}
