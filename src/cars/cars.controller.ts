import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

interface Car {
  id: number;
  marca: string;
  modelo: string;
}

interface CarUpdate {
  CarroActulizado: Car;
  Carros: Car[];
}

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAlllCars(): Car[] {
    return this.carsService.getAllCarro();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number): Car {
    return this.carsService.getCarroById(id);
  }

  @Post()
  addCar(@Body() car: any): Car[] {
    return this.carsService.addCarro(car);
  }

  @Patch(':id')
  updateCar(
    @Body() car: any,
    @Param('id', ParseIntPipe) id: number,
  ): CarUpdate {
    return this.carsService.updateCarro(car, id);
  }

  // @Delete(':id')
  // deleteCar() {}
}
