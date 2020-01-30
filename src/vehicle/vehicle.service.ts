import { Injectable } from '@nestjs/common';
import { Vehicle } from '../entities/vehicle.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehicleInput } from './types/vehicle.input';

@Injectable()
export class VehicleService {
    constructor(
        @InjectRepository(Vehicle)
        private readonly vehicleRepository: Repository<Vehicle>
    ) {}

    async findAll(): Promise<Vehicle[]> {
        return await this.vehicleRepository.createQueryBuilder().getMany();
    }

    async create(vehicleInput: VehicleInput): Promise<Vehicle> {
        const vehicle = this.vehicleRepository.create(vehicleInput);
        return await this.vehicleRepository.save(vehicle);
    }
}
