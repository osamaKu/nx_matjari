import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt'
import { JwtDto } from '../dto/jwt.dto'
import User from '../models/user.model'
import { AuthService } from '../services/auth.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    })
  }

  async validate(payload: JwtDto, done: VerifiedCallback) {
    const user: User = await this.authService.validateUser(payload.userId)

    if (!user) {
      return done(new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED), false)
    }

    return done(null, user)
  }
}
