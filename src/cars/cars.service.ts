import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDTO } from './dtos/create-car.dto';
import { UpdateCarDTO } from './dtos/update-car.dto';

@Injectable()
export class CarsService {
  private Carros: Car[] = [
    {
      id: uuidv4(),
      marca: 'Toyota',
      modelo: 'Corolla',
    },
    {
      id: uuidv4(),
      marca: 'Honda',
      modelo: 'Civic',
    },
    {
      id: uuidv4(),
      marca: 'Ford',
      modelo: 'Mustang',
    },
    {
      id: uuidv4(),
      marca: 'Chevrolet',
      modelo: 'Camaro',
    },
    {
      id: uuidv4(),
      marca: 'Nissan',
      modelo: 'Altima',
    },
  ];

  getAllCarro() {
    return this.Carros;
  }

  getCarroById(id: string) {
    const Carro = this.Carros.find((carro) => carro.id === id);

    if (!Carro) throw new NotFoundException('El carro no existe');

    return Carro;
  }

  addCarro(carro: CreateCarDTO) {
    this.Carros.push({
      id: uuidv4(),
      marca: carro.marca,
      modelo: carro.modelo,
    });

    return this.Carros;
  }

  updateCarro(carro: UpdateCarDTO, id: string) {
    this.Carros = this.Carros.map((car) => {
      if (car.id === id) {
        return {
          id: id,
          marca: carro.marca,
          modelo: carro.modelo,
        };
      }
      return car;
    });

    const carroUpdate = this.Carros.find((car) => {
      return car.id === id;
    });

    return {
      CarroActulizado: carroUpdate,
      Carros: this.Carros,
    };
  }

  deleteCarro(id: string) {
    this.getCarroById(id);
    this.Carros = this.Carros.filter((car) => car.id !== id);

    return this.Carros;
  }
}
