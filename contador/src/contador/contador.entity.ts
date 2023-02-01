import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contador {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    contador: number
    default: 0;
}