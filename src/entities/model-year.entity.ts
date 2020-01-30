import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Model } from './model.entity';
import { ObjectType, Field, ID, Int } from 'type-graphql';

@ObjectType()
@Entity('models_year')
export class ModelYear {
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(type => Int)
    @Column()
    year: number;

    @Field(type => Model)
    @JoinColumn({ name: 'id_model' })
    @ManyToOne(
        type => Model,
        model => model.modelYears
    )
    model: Model;
    @JoinColumn({ name: 'id_model' })
    idModel: number;
}
