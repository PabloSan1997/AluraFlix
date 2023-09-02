import {Boom} from '@hapi/boom';
import {Response, Request, NextFunction} from 'express';

export function boomHandle(error:Boom, req:Request, res:Response, next: NextFunction){
    if(error.isBoom){
        const data = error.output.payload;
        res.status(data.statusCode).json(data);
    }
    else{
        next(error);
    }
}