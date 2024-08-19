import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private Brands: Brand[] = [
    {
      id: uuid(),
      nombre: 'Toyota',
      FechaCreacion: new Date(),
    },
    {
      id: uuid(),
      nombre: 'Honda',
      FechaCreacion: new Date(),
    },
    {
      id: uuid(),
      nombre: 'Ford',
      FechaCreacion: new Date(),
    },
    {
      id: uuid(),
      nombre: 'Chevrolet',
      FechaCreacion: new Date(),
    },
    {
      id: uuid(),
      nombre: 'BMW',
      FechaCreacion: new Date(),
    },
  ];

  create(createBrandDto: CreateBrandDto) {
    this.Brands.push({
      id: uuid(),
      nombre: createBrandDto.nombre,
      FechaCreacion: new Date(),
    });

    return this.Brands;
  }

  findAll() {
    return this.Brands;
  }

  findOne(id: string) {
    const Brand = this.Brands.find((brand) => brand.id === id);

    if (!Brand) throw new NotFoundException('La marca no existe');

    return Brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    this.Brands = this.Brands.map((brand) => {
      if (brand.id === id) {
        return {
          id: id,
          nombre: updateBrandDto.nombre,
          FechaCreacion: brand.FechaCreacion,
        };
      }
      return brand;
    });

    return this.Brands;
  }

  remove(id: string) {
    this.findOne(id);

    this.Brands = this.Brands.filter((brand) => brand.id !== id);

    return this.Brands;
  }
}
