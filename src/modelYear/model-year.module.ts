import { ModelYearService } from './model-year.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelYear } from '../entities/model-year.entity';
import { ModelYearResolver } from './model-year.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([ModelYear])],
    providers: [ModelYearService, ModelYearResolver],
})
export class ModelYearModule {}
