import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { Contador } from './contador.entity';

@Injectable()
export class ContadorRepository {

    constructor(@InjectRepository(Contador) private contadorRepository: Repository<Contador>){
    }

    async getContador(id: number): Promise <Contador> {
        return await this.contadorRepository.findOneBy({id});
    }

    async createContador(){
        let contador = this.contadorRepository.create();
        try {
            await this.contadorRepository.save(contador);
        }catch(error){
            if (error.errno == 1062){
                throw new ConflictException("já existe uma conta com este e-mail e/ou senha cadastrado");
            }
            throw error;
        }
        return contador;
    }

    async incrementContador(id: number){
        const contador = await this.getContador(id);
        contador.contador++
        return await this.contadorRepository.save(contador);
    }
}