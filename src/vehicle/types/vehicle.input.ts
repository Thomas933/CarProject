import { InputType, Field, registerEnumType } from 'type-graphql';
import { Vehicle } from '../../entities/vehicle.entity';
import { VehicleType } from '../../enums/vehicle.enum';

registerEnumType(VehicleType, {
    name: 'vehicleType',
});

@InputType()
export class VehicleInput implements Partial<Vehicle> {
    @Field(type=> VehicleType)
    type: VehicleType;
}
