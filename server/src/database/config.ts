import {DataSource} from 'typeorm';
import { variables } from './variables';
import { Videos } from './models/videos';
import { Categories } from './models/categories';

export const AppDataSource = new DataSource({
    type:'postgres',
    url:variables.DATABASE,
    synchronize:true,
    ssl:{
        rejectUnauthorized:true
    },
    logging:true,
    entities:[Videos, Categories]
});

export function inicializar(){
    AppDataSource.initialize()
    .then(()=>console.log('Conectado con la base de datos'))
    .catch(()=>console.log('Error con la base de datos'));
}