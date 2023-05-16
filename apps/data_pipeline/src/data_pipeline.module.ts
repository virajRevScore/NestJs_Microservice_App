import { Module } from '@nestjs/common';
import { DataPipelineController } from './data_pipeline.controller';
import { DataPipelineService } from './data_pipeline.service';
import { AuthModule, RabbitMqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi'

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal : true ,
    validationSchema : Joi.object({
      RABBIT_MQ_URI : Joi.string().required(),
      RABBIT_MQ_DATA_PIPELINE_QUEUE : Joi.string().required()
    }) 
  }) , 
  RabbitMqModule,
  AuthModule,
  ],
  controllers: [DataPipelineController],
  providers: [DataPipelineService],
})
export class DataPipelineModule {}
