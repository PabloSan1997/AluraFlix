
import React from 'react';
import { readCategory, readCategoryRelation } from '../api/readCategory';

const Contexto = React.createContext({});

const initlaState = {
    id_video:'',
    titulo: '',
    link_video: '',
    link_imagen: '',
    description: ''
}

export function Provedor({children}:Children){
    const [categoriaVideos, setCategoriaVideos] = React.useState<CategoriesRelationRes[]>([]);
    const [actualizar, setActualizar] = React.useState<boolean>(false);
    const [categorias, setCategorias] = React.useState<CategoriesRes[]>([]);
    const [muestra, setMuestra] = React.useState<VideosRes>(initlaState);
    const actual=()=>{
        setActualizar(!actualizar);
    }

    React.useEffect(()=>{
        readCategoryRelation()
        .then(data=>{
            setCategoriaVideos(data);
            if(data.length>0){
                const inicio = data[0];
                const video = inicio.videos;
                if(video.length>0){
                    setMuestra(video[0]);
                }
            }
        })
        .catch((error)=>{
            console.error(error);
            setCategoriaVideos([]);
        });
    },[actualizar]);

    
    React.useEffect(() => {
        readCategory()
          .then(data => setCategorias(data))
          .catch(error => {
            console.error(error);
          });
      }, [actualizar]);

    return(
        <Contexto.Provider value={{
            actual,
            categoriaVideos,
            categorias,
            muestra,
            setMuestra
        }}>
            {children}
        </Contexto.Provider>
    );
}

export const UseContexto = () => React.useContext(Contexto) as Context;