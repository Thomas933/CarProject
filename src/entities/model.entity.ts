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
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity('models')
export class Model {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    name: string;

    @Field(type => Brand)
    @ManyToOne(type => Brand)
    @JoinColumn({ name: 'id_brand' })
    brand: Brand;

    @JoinColumn({name: 'id_brand'})
    idBrand: number;

    @Field(type => [ModelYear])
    @OneToMany(
        type => ModelYear,
        modelYear => modelYear.model
    )
    modelYears: ModelYear[];
}
