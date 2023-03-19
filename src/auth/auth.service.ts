import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateCredentials(email: string, password: string) {
    const user = await this.userService.find(email);
    if (!user) throw new UnauthorizedException('Invalid Email');
    if (!compareSync(password, user.password)) {
      throw new UnauthorizedException('Invalid Credentials');
    }
    return user;
  }

  async loginWithCredential(user: any) {
    const payload = { email: user.email, id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
