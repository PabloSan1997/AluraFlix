
import logo from '../assets/letras.svg';

import {useLocation, useNavigate} from 'react-router-dom';
import { rutas } from '../utilities/routes';
import '../styles/header.scss'

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
  return (
    <header>
        <h1><img src={logo} alt="logo" onClick={()=>navigate(rutas.homePage)}/></h1>
        {location.pathname===rutas.homePage?
        <button className='boton_into' onClick={()=>navigate(rutas.addVideoRoute)}>Nuevo video</button>
        :null}
    </header>
  )
}
