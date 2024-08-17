import { IsString } from 'class-validator';

export class CreateCarDTO {
  @IsString({ message: 'La marca es requerida' })
  readonly marca: string;
  @IsString({ message: 'EL modelo es requerido' })
  readonly modelo: string;
}
