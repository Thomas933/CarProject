import { ModelService } from './model.service';
import { Module } from '@nestjs/common';
import { Model } from '../entities/model.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelResolver } from './model.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Model])],
    providers: [ModelService, ModelResolver],
})
export class ModelModule {}
