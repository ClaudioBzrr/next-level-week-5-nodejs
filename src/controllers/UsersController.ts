import {Request, Response} from 'express'
import {UsersService} from './../services/UsersService'



class UsersController{
    async create(request:Request,response:Response):Promise<Response>{
        const {email}  =  request.body;

        const usersSevices =  new UsersService();

        try{
            const user = await usersSevices.create({email}).then(user => response.json(user));

        }
        catch(err){
            return response.status(404).json(`${err}`);
        }



    }
}


export {UsersController}