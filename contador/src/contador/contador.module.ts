import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { createClient } from 'redis';
import { ContadorController } from './contador.controller';
import { Contador } from './contador.entity';
import { ContadorRepository } from './contador.repository';
import { ContadorService } from './contador.service';

@Module({
  imports: [TypeOrmModule.forFeature([Contador])],
  controllers: [ContadorController],
  providers: [ContadorService, ContadorRepository]
})
export class ContadorModule {}
