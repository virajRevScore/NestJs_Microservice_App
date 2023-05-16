import { NestFactory } from '@nestjs/core';
import { DataPipelineModule } from './data_pipeline.module';
import { RabbitMqService } from '@app/common';


async function bootstrap() {
  const app = await NestFactory.create(DataPipelineModule);
  const rmqService = app.get<RabbitMqService>(RabbitMqService)
  app.connectMicroservice(rmqService.getOptions('DATA_PIPELINE'))
  await app.startAllMicroservices();
}
bootstrap();
