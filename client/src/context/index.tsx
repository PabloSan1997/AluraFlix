
import React from 'react';
import { readCategory, readCategoryRelation } from '../api/readCategory';

const Contexto = React.createContext({});


export function Provedor({children}:Children){
    const [categoriaVideos, setCategoriaVideos] = React.useState<CategoriesRelationRes[]>([]);
    const [actualizar, setActualizar] = React.useState<boolean>(false);
    const [categorias, setCategorias] = React.useState<CategoriesRes[]>([]);
    const actual=()=>{
        setActualizar(!actualizar);
    }

    React.useEffect(()=>{
        readCategoryRelation()
        .then(data=>{
            setCategoriaVideos(data);
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
            categorias
        }}>
            {children}
        </Contexto.Provider>
    );
}

export const UseContexto = () => React.useContext(Contexto) as Context;