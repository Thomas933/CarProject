import { Resolver, Args, Query } from '@nestjs/graphql';
import { ModelYearService } from './model-year.service';
import { ModelYear } from '../entities/model-year.entity';

@Resolver('ModelYear')
export class ModelYearResolver {
    constructor(private readonly modelYearService: ModelYearService) {}

    @Query(returns => [ModelYear], { nullable: true })
    async findModelYears(
        @Args({ name: 'modelId', type: () => Number }) modelId: number
    ): Promise<ModelYear[]> {
        return await this.modelYearService.findAllByModelId(modelId);
    }
}
