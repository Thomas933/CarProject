import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import { Brand } from './brand.entity';
import { ObjectType, Field, ID } from 'type-graphql';

enum CarType {
    CAR = 'car',
}

@ObjectType()
@Entity('vehicles')
export class Vehicle {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field(type => CarType)
    @Column({ type: 'enum', default: CarType.CAR, enum: CarType })
    type: CarType;

    @Field(type => [Brand])
    @JoinColumn({ name: 'id_model' })
    @OneToMany(
        type => Brand,
        brand => brand.vehicle
    )
    brands: Brand[];

    @JoinColumn({ name: 'id_model' })
    idModel: number;
}
