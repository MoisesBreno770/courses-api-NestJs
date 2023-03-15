import { DataSource } from "typeorm"
import { CourseRefactoringTest1678736611947 } from "./migrations/1678736611947-CourseRefactoringTest";

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'db',
                port: 5432,
                username: 'postgress',
                password: 'docker',
                database: 'cursonestjs',
                entities: [__dirname + '/../**/*.entity.js'],
                synchronize: false,
            });

            return dataSource.initialize();
        },
    },
];

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgress',
    password: 'docker',
    database: 'cursonestjs',
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize: false,
    migrations: [CourseRefactoringTest1678736611947]
});
