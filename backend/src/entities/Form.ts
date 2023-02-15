import { Entity, Column, CreateDateColumn, PrimaryColumn  } from "typeorm";
import { v4  as uuid } from "uuid";

@Entity('forms')
export class Form {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
   observation: string;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}