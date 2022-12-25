import { Body, Controller, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { SendNotification } from '../../../aplication/use-cases/send-notification';
import { CreateNotificationBody } from '@Infra/http/dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification };
  }
}

