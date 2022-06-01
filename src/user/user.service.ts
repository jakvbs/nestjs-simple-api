import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ email });
  }

  async create(dto: UserDto): Promise<User> {
    const { email } = dto;

    const userNotUnique = await this.userRepository.findOne({ email });

    if (userNotUnique) {
      const errors = {
        email: 'Email must be unique',
      };
      throw new HttpException(
        { message: 'Input data validation failed', errors },
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = await argon2.hash(dto.password);

    return this.userRepository.save({
      ...dto,
      password: hashedPassword,
    });
  }
}
