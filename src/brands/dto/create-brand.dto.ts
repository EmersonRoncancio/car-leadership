import { IsString } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  nombre: string;
}
