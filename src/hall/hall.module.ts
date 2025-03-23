import { Module } from '@nestjs/common';
import { HallService } from './hall.service';
import { HallController } from './hall.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [HallController],
  providers: [HallService, PrismaService],
})
export class HallModule {}
