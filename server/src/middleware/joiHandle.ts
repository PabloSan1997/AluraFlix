import {Request, Response, NextFunction} from 'express';
import joi from 'joi';
import boom from '@hapi/boom';
export function joiHandle(schema:joi.Schema){
    return (req:Request, res:Response, next:NextFunction)=>{
        const body = req.body;
        const {error} = schema.validate(body, {abortEarly:false});
        if(!!error){
            const message = error.details[0].message;
            
           throw boom.badRequest(message);
        }
        next();
    }
}