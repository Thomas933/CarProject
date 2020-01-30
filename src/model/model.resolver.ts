import { Resolver, Query, Args } from '@nestjs/graphql';
import { ModelService } from './model.service';
import { Model } from '../entities/model.entity';

@Resolver('Model')
export class ModelResolver {
    constructor(private readonly modelService: ModelService) {}

    @Query(returns => [Model])
    async findModels(): Promise<Model[]> {
        return await this.modelService.findAll();
    }
}
