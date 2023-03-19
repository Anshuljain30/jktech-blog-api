import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(12)
  password: string;
}
