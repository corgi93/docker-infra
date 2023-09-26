import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // validation체크를 위한 NestJS Pipe에서 validationPipe 설정
    // {whitelist: true}로 하면 만약 처리기에서 email, password만 기대하는데
    // age라는 값이 들어오면 pipe에서 자동으로 제거해서 필터링 해준다.
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

    const config = new DocumentBuilder()
        .setTitle('vohis dev')
        .setDescription('vohis dev api 문서')
        .setVersion('0.1')
        .build();

    // swagger문서 생성 (애플리케이션 ,  swagger 설정)
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}
bootstrap();
