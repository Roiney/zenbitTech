import { Request, Response } from "express";
import { CreateUserService } from "../service/CreateUserService";


export class CreateUserControllers {
    
    async handle (request: Request, response: Response){
        const { name, email, observation } = request.body;
        
       
        const service = new CreateUserService();

        const result = await service.execute({name, email, observation})
        

        if (result instanceof Error){
            return response.status(400).json("An error occurred while registering the form!")
        }

        return response.json("Successfully registered form!")
    }

}