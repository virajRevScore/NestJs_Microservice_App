import { NestFactory } from '@nestjs/core';
import { RevScoreModule } from './rev-score.module';

async function bootstrap() {
  const app = await NestFactory.create(RevScoreModule);
  await app.listen(3000);
}
bootstrap();
