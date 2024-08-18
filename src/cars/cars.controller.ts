import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dtos/create-car.dto';
import { UpdateCarDTO } from './dtos/update-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAlllCars() {
    return this.carsService.getAllCarro();
  }

  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.getCarroById(id);
  }

  @Post()
  addCar(@Body() car: CreateCarDTO) {
    return this.carsService.addCarro(car);
  }

  @Patch(':id')
  updateCar(
    @Body() car: UpdateCarDTO,
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    return this.carsService.updateCarro(car, id);
  }

  @Delete(':id')
  deleteCar(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.deleteCarro(id);
  }
}
