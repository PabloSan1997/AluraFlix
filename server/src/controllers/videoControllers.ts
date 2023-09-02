import {Response, Request, NextFunction} from 'express';
import { Videos } from '../database/models/videos';
import { AppDataSource } from '../database/config';
import boom from '@hapi/boom';
import { Categories } from '../database/models/categories';
import {v4 as uuidV4} from 'uuid';

export class VideoController{
    async readVideos(req:Request, res:Response, next:NextFunction){
        const repositorio = AppDataSource.getRepository(Videos);
        try {
            const videos = await repositorio.find({
                relations:{
                    categoria:true
                }
            });
            res.json(videos);
        } catch (error) {
            next(boom.notFound('Problemas con encontrar videos'));
        }
    }
    async readVideosOnlyOne(req:Request, res:Response, next:NextFunction){
        const repositorio = AppDataSource.getRepository(Videos);
        const {id_video} = req.params as {id_video:string};
        try {
            const videos = await repositorio.find({
                relations:{
                    categoria:true
                },
                where:{
                    id_video
                }
            });
            if(videos.length===0){
                throw 'No se encontró';
            }
            res.json(videos[0]);
        } catch (error) {
            const message = typeof error==='string'?error:'Problemas para encontrar datos';
            next(boom.notFound(message));
        }
    }
    async addVideos(req:Request, res:Response, next:NextFunction){
        const repoCategory = AppDataSource.getRepository(Categories);
        const cuerpo = req.body as VideoReq;
        const repoVideo = AppDataSource.getRepository(Videos);
        try {
            const category = await repoCategory.find({where:{
                id_category:cuerpo.id_category
            }});
            console.log(category);
            if(category.length===0){
                throw 'No se puede acceder a la imagen';
            }
            const categoryExists = category[0];
            const newVideo = new Videos();
            newVideo.description = cuerpo.description;
            newVideo.id_video = uuidV4();
            newVideo.link_imagen = cuerpo.link_imagen;
            newVideo.link_video = cuerpo.link_video;
            newVideo.titulo = cuerpo.titulo;
            newVideo.categoria = categoryExists;
            await repoVideo.manager.save(newVideo);
            res.json({message:'Se agrego video', data:newVideo});
        } catch (error) {
            next(boom.badImplementation('Problemas para agregar videos'));
        }
    }
    async removeVideo(req:Request, res:Response, next:NextFunction){
        const {id_video} = req.params as {id_video:string};
        const repoVideo = AppDataSource.getRepository(Videos);
        try {
            await repoVideo.delete({id_video});
            res.json({message:'Video borrado con exito'});
        } catch (error) {
            next(boom.badImplementation('Problemas al borrar elemento'));
        }
    }
    async editVideo(req:Request, res:Response, next:NextFunction){
        const body = req.body as VideoRes;
        const repoVideo = AppDataSource.getRepository(Videos);
        try {
            const videos = await repoVideo.find({
                where:{
                    id_video:body.id_video
                }
            });
            if(videos.length===0){
                throw 'No hay elementos a editar'
            }
            const video = videos[0];
            await repoVideo.update({id_video:video.id_video}, body);
            res.status(201).json({message:"elemento editado", data:video});
        } catch (error) {
            const message = typeof error === 'string'?error:'Problemas al editar elemento';
            next(boom.notFound(message));
        }
    }
}

type VideoReq = {
    id_category:string,
    titulo:string,
    link_video:string,
    link_imagen:string,
    description:string
}

type VideoRes = {
    id_video:string,
    titulo:string,
    link_video:string,
    link_imagen:string,
    description:string
}