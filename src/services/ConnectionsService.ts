import {getCustomRepository, Repository} from 'typeorm'
import { Connection } from '../entities/Connection'
import {ConnectionRepository} from '../repositories/ConnectionRepository'

interface IConnetionCreate{
    socket_id:string;
    user_id:string;
    admin_id?:string;
    id?:string;
}

class ConnectionsService{
    private connetionsRepository:Repository<Connection>

    constructor(){
        this.connetionsRepository =  getCustomRepository(ConnectionRepository);
    }

    async create({socket_id,user_id,admin_id,id}:IConnetionCreate){
        const connection = this.connetionsRepository.create({
            socket_id,
            user_id,
            admin_id,
            id
        });

        await this.connetionsRepository.save(connection);


        return connection;
    }

    async findUserById(user_id:string){
        const connection =  await this.connetionsRepository.findOne({user_id})
        return connection;
    }
}


export {ConnectionsService}