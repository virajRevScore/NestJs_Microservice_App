import { NestFactory } from '@nestjs/core';
import { RabbitMqService } from '@app/common';
import { AuthModule } from './auth.module';
import { RmqOptions } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const rmqService = app.get<RabbitMqService>(RabbitMqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions('AUTH', true));
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  await app.startAllMicroservices();
  return await app.listen(configService.get('PORT'));
  //remove return is some random ass error pops up. i included it as typescript was bugging to get me to add a return statement with a promise
}
bootstrap();
