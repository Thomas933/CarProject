import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    JoinColumn,
    Index,
} from 'typeorm';
import { Brand } from './brand.entity';
import { ObjectType, Field, ID, Int, registerEnumType } from 'type-graphql';
import { VehicleType } from '../enums/vehicle.enum';

registerEnumType(VehicleType, {
    name: 'VehicleType',
});

@ObjectType()
@Entity('vehicles')
export class Vehicle {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field(type => VehicleType)
    @Index({ unique: true })
    @Column({ type: 'enum', enum: VehicleType, default: VehicleType.CAR })
    type: VehicleType;

    @Field(type => [Brand], {nullable: true})
    @OneToMany(
        type => Brand,
        brand => brand.vehicle
    )
    @JoinColumn({
        name: 'id_model',
        referencedColumnName: 'id_vehicle',
      })
    brands?: Brand[];
    
    @Field(type => Int)
    @JoinColumn({ name: 'id_model' })
    idModel: number;
}
