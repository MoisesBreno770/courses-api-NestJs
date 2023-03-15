import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { CoursesModule } from '../../src/courses/courses.module';
import { CreateCourseDto } from '../../src/courses/dto/create-course.dto/create-course.dto';
import { HttpStatus } from '@nestjs/common';

describe('Courses: /courses', () => {
  let app: INestApplication;

  const course: CreateCourseDto = {
    name: 'Nestjs com TypeORM',
    description: 'Criando api restful com nestjs',
    tags: ['nestjs', 'typeorm', 'nodejs', 'typescript']
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CoursesModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }));

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('Create POST /courses', () => {
    return request(app.getHttpServer())
      .post('/courses')
      .send(course)
      .expect(HttpStatus.CREATED)
      .then(({body}) => {
        const expectdCourse = jasmine.objectContaining({
          ...course,
          tags: jasmine.arrayContaining(
            course.tags.map(name => jasmine.objectContaining({name})
            )
          )
        })
        expect(body).toEqual(expectdCourse)
      })   
  });
});
