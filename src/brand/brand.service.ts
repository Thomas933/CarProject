import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from '../entities/brand.entity';
import { VehicleType } from '../enums/vehicle.enum';

@Injectable()
export class BrandService {
    constructor(
        @InjectRepository(Brand)
        private readonly brandRepository: Repository<Brand>
    ) {}

    async findAll(vehicleType: VehicleType): Promise<Brand[]> {
        console.log(vehicleType)
        try{
            return this.brandRepository
            .createQueryBuilder('brand')
            .leftJoinAndSelect('brand.vehicle', 'vehicle')
            .where('vehicle.type = :vehicleType', { vehicleType })
            .getMany();     
        } catch(e){
            console.log(e);
            throw new Error(e);
        }
       
    }
}
