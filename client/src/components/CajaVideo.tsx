
import { UseContexto } from '../context'



export  function CajaVideo(props:VideosMuestra) {
  const {link_imagen, color} = props;
    const estilos = {
      border:`2px solid ${color}`
    }
    const {setMuestra} = UseContexto();
    const cambiar = () => {
      setMuestra(props);
    }
  return (
        <div className="video">
          <img src={link_imagen} alt="" style={estilos} onClick={cambiar}/>
        </div>
  )
}
