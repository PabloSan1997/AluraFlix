import React from 'react';
import { CategoryOption } from '../components/CategoryOption';
import { addVideoApi } from '../api/addVideoApi';
import {useNavigate} from 'react-router-dom';
import { rutas } from '../utilities/routes';
import { UseContexto } from '../context';
import '../styles/formulario.scss';
const initalState: VideosNew = {
  titulo: '',
  link_imagen: '',
  link_video: '',
  description: '',
  id_category: ''
}

export function AgregarVideo() {
  
  const [nuevoVideo, setNuevoVideo] = React.useState<VideosNew>(initalState);
  const go = useNavigate();
  const {categorias, actual} = UseContexto();
  const cambiar = {
    titulo: (e: React.ChangeEvent<HTMLInputElement>) => setNuevoVideo({ ...nuevoVideo, titulo: e.target.value }),
    link_imagen: (e: React.ChangeEvent<HTMLInputElement>) => setNuevoVideo({ ...nuevoVideo, link_imagen: e.target.value }),
    link_video: (e: React.ChangeEvent<HTMLInputElement>) => setNuevoVideo({ ...nuevoVideo, link_video: e.target.value }),
    id_category: (e: React.ChangeEvent<HTMLSelectElement>) => setNuevoVideo({ ...nuevoVideo, id_category: e.target.value }),
    description: (e: React.ChangeEvent<HTMLTextAreaElement>) => setNuevoVideo({ ...nuevoVideo, description: e.target.value })
  }

  


  const addVideo =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    
    addVideoApi(nuevoVideo)
    .then(data=>{
      console.log(data);
      setNuevoVideo(initalState);
      actual();
    })
    .catch(error=>{
      console.error(error);
      alert(error);
    });
  }
  return (
    <>
    <h2 className="titulo_formulario">Nuevo Video</h2>
      <form className="formulario formularioVideo" onSubmit={addVideo}>
        <div className="fila">
          <label htmlFor="">Titulo</label>
          <input type="text" className="entrada" value={nuevoVideo.titulo} onChange={cambiar.titulo} />
        </div>
        <div className="fila">
          <label htmlFor="">Link del video</label>
          <input type="text" className="entrada" value={nuevoVideo.link_video} onChange={cambiar.link_video} />
        </div>
        <div className="fila">
          <label htmlFor="">Link imagen del video</label>
          <input type="text" className="entrada" value={nuevoVideo.link_imagen} onChange={cambiar.link_imagen} />
        </div>
        <div className="fila">
          <select className="entrada" value={nuevoVideo.id_category} onChange={cambiar.id_category}>
            <option value="" defaultChecked disabled>Categorias</option>
            {categorias.map(elemento => (
              <CategoryOption key={elemento.id_category} {...elemento} />
            ))}
          </select>
        </div>
        <div className="fila">
          <label htmlFor="">Descripcion</label>
          <textarea className="entrada area-texto" value={nuevoVideo.description} onChange={cambiar.description}></textarea>
        </div>
        <div className="area_botones">
          <button type="submit" className='boton boton_azul'>Gaurdar</button>
          <button type="button" className='boton boton_gris' onClick={()=>setNuevoVideo(initalState)}>Limpiar</button>
          <button type='button' className='boton boton_azul boton_izquierdo' onClick={()=>go(rutas.addCategoryRoute)}>Nueva categoría</button>
        </div>
      </form>
    </>
  )
}
