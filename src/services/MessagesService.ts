import {getCustomRepository, Repository} from 'typeorm'
import { Message } from '../entities/Message';
import {MessageRepository} from './../repositories/MessageRepository'


interface IMessages{
    text:string;
    admin_id?:string;
    user_id:string;
}

class MessagesService{

    private messageRepository :Repository<Message>

    constructor(){
        this.messageRepository =  getCustomRepository(MessageRepository);
    }

    async create({text,admin_id,user_id}:IMessages){


        const message = this.messageRepository.create({
            text,
            user_id,
            admin_id
        });

        await this.messageRepository.save(message);


        return message;
    }

    async listByUser(user_id:string){

        const list =  await this.messageRepository.find({
            where:{user_id},
            relations:['user']
        })

        return list;

    }

}


export {MessagesService}