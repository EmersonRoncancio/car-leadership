import { IsString } from 'class-validator';

export class UpdateCarDTO {
  @IsString({ message: 'La marca es requerida' })
  readonly marca: string;
  @IsString({ message: 'EL modelo es requerido' })
  readonly modelo: string;
}
