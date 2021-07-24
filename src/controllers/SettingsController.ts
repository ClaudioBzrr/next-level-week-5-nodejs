import {Request,Response} from 'express';
import {SettingsService} from './../services/SettingsServices'


class SettingsController{
    async create(request:Request, response:Response){
        
        const {chat, username} =  request.body;
        const settingsService =  new SettingsService();

        try{
            const setting =  await settingsService.create({chat,username});
            return response.json(setting);

        }catch(err){
            return response.status(403).json({message:`${err}`});
        }
    }
}


export {SettingsController}