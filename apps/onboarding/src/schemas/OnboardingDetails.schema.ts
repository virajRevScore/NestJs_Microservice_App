import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "@app/common";


@Schema({ versionKey : false })
export class OnboardingDetails extends AbstractDocument {
    @Prop()
    HubspotAccessToken : string ;
}

export const OnboardingDetailsSchema = SchemaFactory.createForClass(OnboardingDetails)