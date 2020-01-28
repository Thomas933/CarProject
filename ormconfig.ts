module.exports = [
    {
        name: 'default',
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'car-project',
        synchronize: true,
        entities: ['src/entities/*.ts'],
        migrations: ['src/migrations/*.ts'],
        cli: {
            entitiesDir: 'src/models',
            migrationsDir: 'src/migrations',
            subscribersDir: 'src/subscribers',
        },
    },
];
