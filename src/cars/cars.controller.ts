import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car, CarUpdate } from './interfaces/car.interface';
import { CreateCarDTO } from './dtos/create-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAlllCars(): Car[] {
    return this.carsService.getAllCarro();
  }

  @Get(':id')
  getCarById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Car {
    return this.carsService.getCarroById(id);
  }

  @Post()
  addCar(@Body() car: CreateCarDTO): Car[] {
    return this.carsService.addCarro(car);
  }

  @Patch(':id')
  updateCar(
    @Body() car: any,
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): CarUpdate {
    return this.carsService.updateCarro(car, id);
  }

  // @Delete(':id')
  // deleteCar() {}
}
