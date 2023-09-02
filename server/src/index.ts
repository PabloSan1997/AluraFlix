import 'dotenv/config';
import "reflect-metadata";
import { inicializar } from './database/config';
import express from 'express';
import { crearApi } from './routes';
import cors from 'cors';
import morgan from 'morgan';
import { boomHandle } from './middleware/boomHandle';
import { headerHandle } from './middleware/headerHandle';

const port = process.env.PORT || 3005;
const app = express();

inicializar();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(headerHandle);

crearApi(app);

app.use(boomHandle);

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});