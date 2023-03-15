import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    CoursesModule, 
    //  TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'db',
    //   port: 5432,
    //   username: 'postgress',
    //   password: 'docker',
    //   database: 'cursonestjs',
    //   entities: [__dirname + '/**/*.entity.ts'],
    //   autoLoadEntities: false,
    //   synchronize: false,
    // }), DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
