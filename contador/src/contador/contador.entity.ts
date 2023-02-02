import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contador {

    @PrimaryGeneratedColumn()
    id: number

    @Column({default: 0})
    contador: number
}