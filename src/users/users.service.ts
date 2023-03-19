import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashSync } from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const isEmailUsed = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });
    if (isEmailUsed) throw new BadRequestException('Email already in Use.');
    createUserDto.password = hashSync(
      createUserDto.password,
      Number(process.env.HASH_SALT),
    );
    const createdUser = await this.userRepository.save(createUserDto);
    delete createdUser.password;
    return createdUser;
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    return await this.userRepository.findOneBy({ id });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (Object.keys(updateUserDto).length === 0)
      throw new BadRequestException('No Update Parameters');
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new BadRequestException('User not found with provided ID.');
    if (updateUserDto.password)
      updateUserDto.password = hashSync(
        updateUserDto.password,
        Number(process.env.HASH_SALT),
      );
    const updatedUser = await this.userRepository.save({
      ...user,
      ...updateUserDto,
    });
    delete updatedUser.password;
    return updatedUser;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
