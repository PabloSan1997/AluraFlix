import {Request, Response, NextFunction} from 'express';
import { variables } from '../database/variables';
import boom from '@hapi/boom';

export function headerHandle(req: Request, res:Response, next:NextFunction){
    const {cabeza} = req.headers as {cabeza:string};
    if(cabeza!==variables.HEADER_ALLOWED){
        throw boom.badRequest('No tienes permiso para acceder');
    } 
    next();
}