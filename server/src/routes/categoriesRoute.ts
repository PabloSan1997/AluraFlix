import express from 'express';
import { CategoriesController } from '../controllers/categorieControllers';
import { joiHandle } from '../middleware/joiHandle';
import { addCategorySchema, editCategoryScema } from '../schemas/categoriaSchema';

const controller = new CategoriesController();
export const categoriesRoute = express.Router();



categoriesRoute.get('/', controller.readCategories);
categoriesRoute.get('/relation', controller.readCategoriesRelation);
categoriesRoute.get('/:id_category', controller.readOnlyOne);
categoriesRoute.post('/', joiHandle(addCategorySchema) ,controller.addCategory);
categoriesRoute.patch('/', joiHandle(editCategoryScema) ,controller.editCategory);
categoriesRoute.delete('/:id_category', controller.deleteCategory);