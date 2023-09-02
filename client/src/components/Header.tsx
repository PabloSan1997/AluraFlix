
import logo from '../assets/letras.svg';

import {useLocation, useNavigate} from 'react-router-dom';
import { rutas } from '../utilities/routes';

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
  return (
    <header>
        <img src={logo} alt="logo" onClick={()=>navigate(rutas.homePage)}/>
        {location.pathname===rutas.homePage?
        <button className='boton' onClick={()=>navigate(rutas.addVideoRoute)}>Nuevo video</button>
        :null}
    </header>
  )
}
