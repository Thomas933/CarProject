import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Model } from './model.entity';
import { ObjectType, Field, ID } from 'type-graphql';
import { Vehicle } from './vehicle.entity';

@ObjectType()
@Entity('brands')
export class Brand {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field()
    @Column()
    name: string;

    @Field(type => Vehicle)
    @ManyToOne(type => Vehicle)
    @JoinColumn({ name: 'id_vehicle' })
    vehicle: Vehicle;

    @JoinColumn({ name: 'id_vehicle' })
    idVehicle: number;

    @OneToMany(
        type => Model,
        model => model.brand
    )
    @JoinColumn({ name: 'id_model' })
    models: Model[];

    @JoinColumn({ name: 'id_model' })
    idModel: number;
}
