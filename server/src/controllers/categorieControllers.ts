import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../database/config';
import { Categories } from '../database/models/categories';
import boom from '@hapi/boom';
import {v4 as uuidV4} from 'uuid';

export class CategoriesController {
    async readCategories(req: Request, res: Response, next: NextFunction) {
        const repository = AppDataSource.getRepository(Categories);
        try {
            const data = await repository.find();
            res.json(data);
        } catch (error) {
            next(boom.notFound('No se encontró elementos'));
        }
    }
    async readOnlyOne(req: Request, res: Response, next: NextFunction){
        const repository = AppDataSource.getRepository(Categories);
        const {id_category} = req.params as {id_category:string}; 
        try {
            const data = await repository.find({
                where:{
                    id_category
                },
                relations:{
                    videos:true
                }
            });
            if(data.length===0){
                throw 'No se encontró elemento';
            }
            res.json(data[0]);
        } catch (error) {
            const message = typeof error==='string'?error:'Problemas para encontrar datos';
            next(boom.notFound(message));
        }
    }
    async readCategoriesRelation(req: Request, res: Response, next: NextFunction) {
        const repository = AppDataSource.getRepository(Categories);
        try {
            const data = await repository.find({relations:{videos:true}});
            res.json(data);
        } catch (error) {
            next(boom.notFound('No se encontró elementos'));
        }
    }
    async addCategory(req: Request, res: Response, next: NextFunction){
        const repository = AppDataSource.getRepository(Categories);
        const cuerpo = req.body as CategoryReq;
        try {
            const newCategory = new Categories();
            newCategory.id_category = uuidV4();
            newCategory.description = cuerpo.description;
            newCategory.color=cuerpo.color;
            newCategory.name = cuerpo.name;
            await repository.manager.save(newCategory);
            res.status(201).json({message:'Categoria agregada con exito', data: newCategory});
        } catch (error) {
            next(boom.badRequest('Problemas al agregar categoria'));
        }
    }
    async editCategory(req: Request, res: Response, next: NextFunction){
        const repository = AppDataSource.getRepository(Categories);
        const cuerpo = req.body as CategoryRes;
        try {
            const data = await repository.find({
                where:{
                    id_category:cuerpo.id_category
                }
            });
            if(data.length===0){
                throw 'No hay elementos para editar';
            }
            const category = data[0];
            const nuevo = {
                ...category,
                ...cuerpo
            }
            await repository.update({id_category:nuevo.id_category}, nuevo);
            res.json({message:'Se edito elemento', ...nuevo});
        } catch (error) {
            if(typeof error ==='string'){
                next(boom.notFound(error));
            }
            else{
                next(boom.badImplementation('Problemas al editar datos'));
            }
        }
    }
    async deleteCategory(req: Request, res: Response, next: NextFunction){
        const repository = AppDataSource.getRepository(Categories);
        const {id_category} = req.params as {id_category:string};
        try {
           await repository.delete({id_category});
           res.json({message:'Elemento borrado con exito'}); 
        } catch (error) {
            next(boom.badImplementation('Problemas al eliminar datos'));
        }
    }
}

type CategoryReq = {
    description:string,
    color:string,
    name:string
}
type CategoryRes = {
    description:string,
    color:string,
    name:string,
    id_category:string
}