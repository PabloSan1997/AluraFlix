import {useRoutes, HashRouter, Navigate} from 'react-router-dom';
import { Home } from './pages/Home';
import { AgregarVideo } from './pages/AgregarVideo';
import { AgregarCategoria } from './pages/AgregarCategoria';

const Rutas =()=>useRoutes([
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/addVideo',
        element:<AgregarVideo/>
    },
    {
        path:'/addCategory',
        element:<AgregarCategoria/>
    },
    {
        path:'*',
        element:<p>Not found</p>
    },
    {
        path:'/',
        element:<Navigate to='/home'/>
    }
]);


export function App(){
    return(
        <HashRouter>
            <Rutas/>
        </HashRouter>
    );
}