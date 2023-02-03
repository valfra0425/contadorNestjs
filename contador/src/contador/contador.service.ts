import {CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { ContadorRepository } from './contador.repository';
import { Cache } from 'cache-manager';
import { Contador } from './contador.entity';

@Injectable()
export class ContadorService {

    constructor(private contadorRepository: ContadorRepository,
        @Inject(CACHE_MANAGER) private cacheService: Cache){
    }

    async getContador(id){
        const cachedData: Contador = await this.cacheService.get(id.toString());
        if (cachedData){
            return await cachedData;
        } else {
            const data = await this.contadorRepository.getContador(id);
            await this.cacheService.set(id.toString(), data)
            return data;
        }
    }

    async createContador(){
        return await this.contadorRepository.createContador();
    }

    async incrementContador(id){
        let cachedData: Contador = await this.cacheService.get(id.toString());
        if (cachedData) {
            cachedData.contador++
            await this.cacheService.set(id.toString(), cachedData)
        }
        return await this.contadorRepository.incrementContador(id);
    }
}
