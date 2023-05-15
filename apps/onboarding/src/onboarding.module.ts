import { Module } from '@nestjs/common';
import { OnboardingController } from './onboarding.controller';
import { OnboardingService } from './onboarding.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi'
import { DatabaseModule } from '@app/common';
import { OnboardingDetailsRepository } from './OnboardingDetails.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { OnboardingDetails, OnboardingDetailsSchema } from './schemas/OnboardingDetails.schema';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal : true,
    validationSchema : Joi.object({
      MONGODB_URI : Joi.string().required(),
      PORT : Joi.number().required()
    }),
    envFilePath : './apps/onboarding/.env'
  }),
  DatabaseModule,
  MongooseModule.forFeature([{ name : OnboardingDetails.name , schema : OnboardingDetailsSchema }])
  ],
  controllers: [OnboardingController],
  providers: [OnboardingService , OnboardingDetailsRepository],
})
export class OnboardingModule {}
