import { VehicleService } from './vehicle.service';
import { VehicleResolver } from './vehicle.resolver';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from '../entities/vehicle.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Vehicle])],
    providers: [VehicleService, VehicleResolver],
})
export class VehicleModule {}
