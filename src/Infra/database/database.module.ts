import { Module } from '@nestjs/common';
import { NotificationsRepository } from '../../aplication/repositories/notifications-repository';
import { PrismaNotificationsRepository } from '../../Infra/database/prisma/repositories/prisma-notifications-repository';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}