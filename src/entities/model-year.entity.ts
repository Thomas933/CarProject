import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Model } from './model.entity';

@Entity('models_year')
export class ModelYear {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    year: number;

    @ManyToOne(type => Model, model => model.modelYears)
    @JoinColumn({ name: 'id_model' })
    model: Model;
}
