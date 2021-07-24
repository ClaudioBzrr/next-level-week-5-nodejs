import {Request,Response} from 'express'
import {MessagesService} from './../services/MessagesService'

class MessagesController {

    async create(request:Request,response:Response){
        const {text,admin_id,user_id} = request.body;
        const messagesService =  new MessagesService();

        try{
            
           const message = await messagesService.create({text,admin_id,user_id})
           return response.json(message)

        }catch(err){
            return response.json({message:`Error: ${err}`});
        }
        
    }

    async showByUser(request:Request,response:Response){
        const {id} = request.params
        const messagesService =  new MessagesService();

        const list = await messagesService.listByUser(id)


        return response.json(list)

    }

}



export {MessagesController}; 