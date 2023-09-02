import React from 'react';
import { readCategory } from '../api/readCategory';
import { CategoryOption } from '../components/CategoryOption';
import { addVideoApi } from '../api/addVideoApi';
import {useNavigate} from 'react-router-dom';
import { rutas } from '../utilities/routes';

const initalState: VideosNew = {
  titulo: '',
  link_imagen: '',
  link_video: '',
  description: '',
  id_category: ''
}

export function AgregarVideo() {
  const [categorias, setCategorias] = React.useState<CategoriesRes[]>([]);
  const [nuevoVideo, setNuevoVideo] = React.useState<VideosNew>(initalState);
  const go = useNavigate();
  const cambiar = {
    titulo: (e: React.ChangeEvent<HTMLInputElement>) => setNuevoVideo({ ...nuevoVideo, titulo: e.target.value }),
    link_imagen: (e: React.ChangeEvent<HTMLInputElement>) => setNuevoVideo({ ...nuevoVideo, link_imagen: e.target.value }),
    link_video: (e: React.ChangeEvent<HTMLInputElement>) => setNuevoVideo({ ...nuevoVideo, link_video: e.target.value }),
    id_category: (e: React.ChangeEvent<HTMLSelectElement>) => setNuevoVideo({ ...nuevoVideo, id_category: e.target.value }),
    description: (e: React.ChangeEvent<HTMLTextAreaElement>) => setNuevoVideo({ ...nuevoVideo, description: e.target.value })
  }

  
  React.useEffect(() => {
    readCategory()
      .then(data => setCategorias(data))
      .catch(error => {
        console.error(error);
      });
  }, []);

  const addVideo =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    addVideoApi(nuevoVideo)
    .then(data=>{
      console.log(data);
      setNuevoVideo(initalState);
    })
    .catch(error=>console.error(error));
  }
  return (
    <>
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
          <button type="submit">Gaurdar</button>
          <button type="button" onClick={()=>setNuevoVideo(initalState)}>Limpiar</button>
          <button type='button' onClick={()=>go(rutas.addCategoryRoute)}>Nueva categoría</button>
        </div>
      </form>
    </>
  )
}
