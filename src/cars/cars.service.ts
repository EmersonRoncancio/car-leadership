import { Injectable, NotFoundException } from '@nestjs/common';

interface Car {
  id: number;
  marca: string;
  modelo: string;
}

@Injectable()
export class CarsService {
  private Carros: Car[] = [
    {
      id: 1,
      marca: 'Toyota',
      modelo: 'Corolla',
    },
    {
      id: 2,
      marca: 'Honda',
      modelo: 'Civic',
    },
    {
      id: 3,
      marca: 'Ford',
      modelo: 'Mustang',
    },
    {
      id: 4,
      marca: 'Chevrolet',
      modelo: 'Camaro',
    },
    {
      id: 5,
      marca: 'Nissan',
      modelo: 'Altima',
    },
  ];

  getAllCarro() {
    return this.Carros;
  }

  getCarroById(id: number) {
    const Carro = this.Carros.find((carro) => carro.id === id);

    if (!Carro) throw new NotFoundException('El carro no existe');

    return Carro;
  }

  addCarro(carro: any) {
    this.Carros.push(carro);

    return this.Carros;
  }

  updateCarro(carro: any, id: number) {
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

  //   deleteCarro(id) {}
}
