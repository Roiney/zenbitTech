import { getRepository } from "typeorm";
import { Form } from "../entities/Form";
import { compare } from 'bcryptjs';
import generateToken from '../utilis/generateToken'

type UserRequest = {
name: string;
email: string;
observation: string;
}

export class CreateUserService {

    async execute({name, email, observation}: UserRequest): Promise<Form | Error> {

        console.log(name, email, observation );
        
        const repo = getRepository(Form);
        
        const user = repo.create({
            name, email, observation
        })

        await repo.save(user);
        
        return user;
    }
}