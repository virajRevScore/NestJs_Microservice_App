import { Inject, Injectable } from '@nestjs/common';
import { AddCRMDetailsRequest } from './dto/AddCRMDetailsRequest.dto';
import { OnboardingDetailsRepository } from './OnboardingDetails.repository';
import { DATA_PIPELINE_SERVICE } from './constants/services';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OnboardingService {
  constructor(
    private readonly onboardingDetailsRepository: OnboardingDetailsRepository,
    @Inject(DATA_PIPELINE_SERVICE) private dataPipelineClient: ClientProxy,
  ) {}

  async addCRMDetailsService(request: AddCRMDetailsRequest) {
    const session = await this.onboardingDetailsRepository.startTransaction();

    try {
      const CRMOnboarding = this.onboardingDetailsRepository.create(request, {
        session,
      });
      await lastValueFrom(this.dataPipelineClient.emit('HubSpot Access Token Received. Start Data pipeline!' , { request } ))
      await session.commitTransaction()
      return CRMOnboarding
      
    } catch (error) {
      await session.abortTransaction();
      throw error;
    }
  }

  async getUsersCRMDetailsService(id?: string) {
    if (id) {
      return await this.onboardingDetailsRepository.findOne({ _id: id });
    }
    return await this.onboardingDetailsRepository.find({});
  }
}
