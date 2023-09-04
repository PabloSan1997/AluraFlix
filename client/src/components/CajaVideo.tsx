
import { deleteVido } from '../api/deleteVideo';
import { UseContexto } from '../context'
import {XCircleIcon} from '@heroicons/react/24/solid';


export  function CajaVideo(props:VideosMuestra) {
  const {link_imagen, color, id_video, onSlider} = props;
  const {actual} = UseContexto();
    const estilos = {
      border:`2px solid ${color}`,
    }
    const {setMuestra} = UseContexto();
    const cambiar = () => {
      setMuestra(props);
    }
    const eliminar = () => {
      deleteVido(id_video)
      .then(data=>{
        console.log(data);
        actual();
        onSlider(0);
      })
      .catch(error=>{
        alert(error);
      });
    }
  return (
        <div className="video">
          <XCircleIcon className='cerrar' onClick={eliminar}/>
          <img src={link_imagen} alt="" className="imagen" onClick={cambiar} style={estilos}/>
        </div>
  )
}
