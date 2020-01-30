import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from '../entities/model.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ModelService {
    constructor(
        @InjectRepository(Model)
        private readonly modelRepository: Repository<Model>
    ){}

    async findAll(): Promise<Model[]> {
        return await this.modelRepository
        .createQueryBuilder('model')
        .leftJoinAndSelect('model.modelYears', 'modelYears')
        .getMany()
    }
}
