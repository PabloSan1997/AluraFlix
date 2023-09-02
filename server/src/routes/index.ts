import express, {Express} from 'express';
import { categoriesRoute } from './categoriesRoute';
import { videoRouter } from './videosRoute';

const mainRoute = express.Router();

export function crearApi(app: Express){
    app.use('/api/v1', mainRoute);
    mainRoute.use('/categories', categoriesRoute);
    mainRoute.use('/videos', videoRouter);
    app.get('/', (req, res)=>{
        res.json({message:'Bienvenido a mi api'});
    });
}