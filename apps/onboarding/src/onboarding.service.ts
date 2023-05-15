import { Injectable } from '@nestjs/common';
import { AddCRMDetailsRequest } from './dto/AddCRMDetailsRequest.dto';
import { OnboardingDetailsRepository } from './OnboardingDetails.repository';

@Injectable()
export class OnboardingService {
  constructor(
    private readonly onboardingDetailsRepository: OnboardingDetailsRepository,
  ) {}

  async addCRMDetailsService(request: AddCRMDetailsRequest) {
    return await this.onboardingDetailsRepository.create(request)
  }

  async getUsersCRMDetailsService(id ?: string ){
    if(id){
      return await this.onboardingDetailsRepository.findOne({_id : id})
    }
    return await this.onboardingDetailsRepository.find({})
  }
}
