import {getCustomRepository} from 'typeorm';
import { SettingsRepository } from './../repositories/SettingRepository';


interface ISettingsCreate{
    chat:boolean;
    username:string;
}

class SettingsService{
    async create({chat,username}:ISettingsCreate){
        const settingRepository =  getCustomRepository(SettingsRepository);

        const userAlreadyExists =  await settingRepository.findOne({username});

        if(userAlreadyExists){
            throw new Error('User already exists!');
        }


        const settings = settingRepository.create({
            chat, 
            username
        })
    
        await settingRepository.save(settings);

        return settings
    }
}

export {SettingsService}