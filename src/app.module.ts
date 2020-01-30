import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'car-project',
            entities: [],
            synchronize: false,
        }),
        GraphQLModule.forRoot({
            debug: false,
            playground: false,
            autoSchemaFile: 'schema.gql',
          }),
    ]
})
export class AppModule {}
