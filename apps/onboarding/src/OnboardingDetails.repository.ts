import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { OnboardingDetails } from './schemas/OnboardingDetails.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

@Injectable()
export class OnboardingDetailsRepository extends AbstractRepository<OnboardingDetails> {
  protected readonly logger = new Logger(OnboardingDetailsRepository.name);

  constructor(
    @InjectModel(OnboardingDetails.name)
    onboardingDetailsModel: Model<OnboardingDetails>,
    @InjectConnection() connection: Connection,
  ) {
    super(onboardingDetailsModel, connection);
  }
}
