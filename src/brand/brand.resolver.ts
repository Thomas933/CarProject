import { registerEnumType } from 'type-graphql';
import { Resolver, Query, Args, ArgsOptions } from '@nestjs/graphql';
import { Brand } from '../entities/brand.entity';
import { VehicleType } from '../enums/vehicle.enum';
import { BrandService } from './brand.service';

registerEnumType(VehicleType, {
    name: 'vehicleType',
});

@Resolver(of => Brand)
export class BrandResolver {
    constructor(private readonly brandService: BrandService) {}

    @Query(returns => [Brand], { nullable: true })
    async brands(
        @Args({
            name: 'vehicleType',
            type: () => VehicleType,
            defaultValue: VehicleType.CAR,
        })
        vehicleType: VehicleType
    ): Promise<Brand[]> {
        return await this.brandService.findAll(vehicleType);
    }
}
