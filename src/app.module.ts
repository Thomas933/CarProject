import { ModelYearModule } from './modelYear/model-year.module';
import { ModelModule } from './model/model.module';
import { BrandModule } from './brand/brand.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ENTITIES } from './shared/entities';    

@Module({
    imports: [
        ModelYearModule, 
        ModelModule, 
        BrandModule,
        VehicleModule,
        GraphQLModule.forRoot({
            playground: true,
            autoSchemaFile: 'schema.gql'
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'car-project',
            entities: ENTITIES,
            synchronize: false,
        }),
    ],
})
export class AppModule {}
