import { Injectable, InternalServerErrorException, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthentificationMiddleware implements NestMiddleware {
  constructor(
    private readonly userService: UserService
  ) {}

  async use(req: Request , res: Response, next: NextFunction) {
    try {
      const token = req.headers['auth-user'];

      if(!token) return next(new UnauthorizedException("auth-user header is missing."));

      const decoded = verify(token, process.env.JWT_SECRET, {"algorithms": ["HS256"]})
      if(!decoded) return next(new UnauthorizedException("Invalid token."));

      const user = await this.userService.findOne(decoded["userId"])
      req["user"] = user;
      next()
    } catch (err) {
      next(new InternalServerErrorException("Error occured."))
    }
  }
}
