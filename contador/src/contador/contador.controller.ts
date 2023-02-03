import { Controller, Get, Param, Post, Put, Sse, MessageEvent } from '@nestjs/common';
import { interval, map, Observable, switchMap } from 'rxjs';
import { ContadorService } from './contador.service';

@Controller('contador')
export class ContadorController {
    constructor(private contadorService: ContadorService){
    }

    @Get(':id')
    async getContador(@Param('id') id) {
        return await this.contadorService.getContador(id);
    }

    @Sse('sse/:id')
    async sse(@Param('id') id: string):  Promise<Observable<MessageEvent>> {
        return interval(1000).pipe(switchMap((_) => this.contadorService.getContador(id)),
        map((p) => ({data: p})))
    }

    @Post()
    async createContador() {
        return await this.contadorService.createContador();
    }

    @Put(':id')
    async incrementContador(@Param('id') id) {
        return await this.contadorService.incrementContador(id);
    }
}
