import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe, VersioningType } from '@nestjs/common';

dotenv.config();
async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  const corsOptions = { origin:[process.env.URL_ACCESS_RESOURCES] };

  app.enableCors(corsOptions)
 

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableVersioning({
    type: VersioningType.URI,
  });


  const options = new DocumentBuilder()
    .setTitle('API Congo Work')
    .setDescription("Description de l'API Congo Work")
    .setVersion('1.0') 
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.APP_PORT ||3000);
  console.log(`L'application s'est lancée sur le port ${process.env.APP_URL}:${process.env.APP_PORT}/api`)
}
bootstrap()
  .catch((err) => {
    console.log(err);
  });
