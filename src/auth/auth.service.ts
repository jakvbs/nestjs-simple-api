import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2';
import { User } from '../user/user.entity';
import { UserDto } from '../user/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(dto: UserDto): Promise<User> {
    const { email, password } = dto;

    const user = await this.usersService.findByEmail(email);

    if (user && (await argon2.verify(user.password, password))) {
      return user;
    }
    return null;
  }

  async register(dto: UserDto) {
    const { email } = dto;
    const user = await this.usersService.findByEmail(email);

    if (user) {
      throw new HttpException(
        { message: 'User already exists' },
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.usersService.create(dto);

    return {
      message: 'User created successfully',
    };
  }

  async login(dto: UserDto) {
    const user = await this.validateUser(dto);

    if (!user) {
      throw new HttpException(
        { message: 'Invalid credentials' },
        HttpStatus.UNAUTHORIZED,
      );
    }

    const payload = { email: dto.email, sub: user.id };
    return this.jwtService.sign(payload);
  }
}
