import { Module } from "@nestjs/common";
import { RabbitMqService } from "./rabbitmq.service";

@Module({})
export class RabbitMqModule {
    providers : [RabbitMqService];
    exports : [RabbitMqService]
}