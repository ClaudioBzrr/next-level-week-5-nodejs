import {getCustomRepository} from 'typeorm'
import {UserRespository} from './../repositories/UserRepository'


interface IUsersCreate{
    email:string;
}


class UsersService{

    private usersRepository =  getCustomRepository(UserRespository)

    async create({email}:IUsersCreate){


        const userAlreadyExists =  await this.usersRepository.findOne({email});

        if(userAlreadyExists){
            return userAlreadyExists;
            
        }

        const user =  this.usersRepository.create({email});
        await this.usersRepository.save(user);
        return user;



    }

    async findByEmail({email}:IUsersCreate){
        const find =  await this.usersRepository.findOne({email});
        return find;
    }

}


export {UsersService}