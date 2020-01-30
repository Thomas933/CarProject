import { Arg } from 'type-graphql';
import { Query, Resolver, Mutation } from '@nestjs/graphql';
import { Vehicle } from '../entities/vehicle.entity';
import { VehicleInput } from './types/vehicle.input';
import { VehicleService } from './vehicle.service';

@Resolver(of => Vehicle)
export class VehicleResolver {
    constructor(private readonly vehicleService: VehicleService) {}

    @Query(returns => [Vehicle], { nullable: true })
    async vehicles(): Promise<Vehicle[]> {
       return await this.vehicleService.findAll();
    }

    @Mutation(returns => Vehicle)
    async addVehicle(
        @Arg('vehicleType') vehicleInput: VehicleInput
    ): Promise<Vehicle> {
        return this.vehicleService.create(vehicleInput);
    }
}
