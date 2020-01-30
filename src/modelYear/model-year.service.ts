import { Injectable } from '@nestjs/common';
import { ModelYear } from '../entities/model-year.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ModelYearService {
    constructor(
        @InjectRepository(ModelYear)
        private readonly modelYearRepository: Repository<ModelYear>
    ) {}

    async findAllByModelId(modelId: number) {
        return await this.modelYearRepository
            .createQueryBuilder('modelYear')
            .where('modelYear.id_model = :modelId', { modelId })
            .getMany();
    }
}
