import express from 'express';
import { VideoController } from '../controllers/videoControllers';
import { joiHandle } from '../middleware/joiHandle';
import { addVideoScema, editVideoSchema } from '../schemas/videoSchema';

export const videoRouter = express.Router();

const controller = new VideoController();

videoRouter.get('/', controller.readVideos);
videoRouter.get('/:id_video', controller.readVideosOnlyOne);
videoRouter.post('/', joiHandle(addVideoScema) ,controller.addVideos);
videoRouter.delete('/:id_video', controller.removeVideo);
videoRouter.patch('/', joiHandle(editVideoSchema) ,controller.editVideo);
