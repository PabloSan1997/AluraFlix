
import joi from 'joi';

export const id_category = joi.string().uuid();
const  description = joi.string().min(1);
const  color = joi.string().min(2);
const  name = joi.string().min(1).max(60);


export const addCategorySchema = joi.object(
    {
        description:description.required(),
        color:color.required(),
        name:name.required()
    }
);

export const editCategoryScema = joi.object({
    id_category:id_category.required(),
    description,
    color,
    name
});

