import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { Model } from './model.entity';

@Entity('brands')
export class Brand {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'id_vehicle' })
    idVehicle: number;

    @Column()
    name: string;

    @OneToMany(
        () => Model,
        model => model.brand
    )
    @JoinColumn({ name: 'id_brand' })
    models: Model[];
}
