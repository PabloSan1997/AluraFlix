import {useRoutes, HashRouter, Navigate} from 'react-router-dom';
import { Home } from './pages/Home';
import { AgregarVideo } from './pages/AgregarVideo';
import { AgregarCategoria } from './pages/AgregarCategoria';
import { rutas } from './utilities/routes';
import Header from './components/Header';

const Rutas =()=>useRoutes([
    {
        path:rutas.homePage,
        element:<Home/>
    },
    {
        path:rutas.addVideoRoute,
        element:<AgregarVideo/>
    },
    {
        path:rutas.addCategoryRoute,
        element:<AgregarCategoria/>
    },
    {
        path:'*',
        element:<p>Not found</p>
    },
    {
        path:'/',
        element:<Navigate to={rutas.homePage}/>
    }
]);


export function App(){
    
    return(
        <HashRouter>
            <Header/>
            <Rutas/>
        </HashRouter>
    );
}