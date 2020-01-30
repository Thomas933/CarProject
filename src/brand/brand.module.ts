import { BrandService } from './brand.service';
import { Module } from '@nestjs/common';
import { BrandResolver } from './brand.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from '../entities/brand.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Brand])],
    providers: [BrandService, BrandResolver],
})
export class BrandModule {}
