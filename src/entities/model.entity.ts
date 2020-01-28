import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import { Brand } from './brand.entity';
import { ModelYear } from './model-year.entity';

@Entity('models')
export class Model {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(
        type => Brand,
        brand => brand.models
    )
    @JoinColumn({ name: 'id_brand' })
    brand: Brand;

    @OneToMany(
        type => ModelYear,
        modelYear => modelYear.model
    )
    modelYears: ModelYear[];
}
