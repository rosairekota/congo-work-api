import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  const corsOptions = { origin:['http://localhost:3005'] };
  app.enableCors(corsOptions)

  app.setGlobalPrefix('api');
  const options = new DocumentBuilder()
    .setTitle('API Congo Work')
    .setDescription("Description de l'API Congo Work")
    .setVersion('1.0') 
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap()
  .catch((err) => {
    console.log(err);
  });
