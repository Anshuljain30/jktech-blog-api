import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import { User } from '../../users/entities/user.entity';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  body: string;

  @IsNotEmpty()
  @IsString()
  userId: string;
  user: User;
}
