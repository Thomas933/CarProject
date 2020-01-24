import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from 'typeorm';

@Entity('vehicle')
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number

    @Column({default: 'car'})
    type: string
}

