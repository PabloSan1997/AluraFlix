import { UseContexto } from "../context"
import '../styles/portada.scss';



export function Portada() {
    const { muestra } = UseContexto();
    const { id_video, titulo, description, link_imagen, link_video } = muestra;
    if (!id_video) {
        return null;
    }
    return (
        <div className="portada">
            <div className="area">
                <h2 className="titulo">{titulo}</h2>
                <p className="descripcion">{description}</p>
            </div>
            <div className="area">
                <img src={link_imagen} alt="Imagen" onClick={()=>{window.location.href=link_video}}/>
            </div>
        </div>
    );
}
