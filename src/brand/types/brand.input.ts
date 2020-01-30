import { InputType, Field, Float, registerEnumType } from 'type-graphql';
import { VehicleType } from '../../enums/vehicle.enum';

registerEnumType(VehicleType, {
    name: 'VehicleType',
});

@InputType('BrandInput')
export class BrandInput {
    @Field(type => VehicleType)
    vehicleType: VehicleType;
}
