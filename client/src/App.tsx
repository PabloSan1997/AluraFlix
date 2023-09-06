import { useRoutes, HashRouter, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { AgregarVideo } from './pages/AgregarVideo';
import { AgregarCategoria } from './pages/AgregarCategoria';
import { rutas } from './utilities/routes';
import Header from './components/Header';
import { Footer } from './components/footer';
import { UseContexto } from './context';
import { Loading } from './components/Loading';

const Rutas = () => useRoutes([
    {
        path: rutas.homePage,
        element: <Home />
    },
    {
        path: rutas.addVideoRoute,
        element: <AgregarVideo />
    },
    {
        path: rutas.addCategoryRoute,
        element: <AgregarCategoria />
    },
    {
        path: '*',
        element: <p>Not found</p>
    },
    {
        path: '/',
        element: <Navigate to={rutas.homePage} />
    }
]);


export function App() {
    const { loading } = UseContexto();
    return (
        <HashRouter>
            {loading ? <Loading /> : (
                <>
                    <Header />
                    <Rutas />
                    <Footer />
                </>
            )}
        </HashRouter>
    );
}