import joi from 'joi';
import { id_category } from './categoriaSchema';

const  id_video = joi.string().uuid();
const titulo = joi.string().min(1).max(60);
const link_video = joi.string().min(1);
const link_imagen = joi.string().min(1);
const description = joi.string().min(1);


export const addVideoScema = joi.object(
    {
        titulo:titulo.required(),
        link_video:link_video.required(),
        link_imagen:link_imagen.required(),
        description:description.required(),
        id_category:id_category.required(),
    }
);

export const editVideoSchema = joi.object(
    {
        id_video:id_video.required(),
        titulo,
        link_video,
        link_imagen,
        description
    }
);