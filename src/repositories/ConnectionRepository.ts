import {Repository,EntityRepository} from 'typeorm'
import {Connection} from './../entities/Connection'

@EntityRepository(Connection)
class ConnectionRepository extends Repository<Connection>{
    
}


export {ConnectionRepository}