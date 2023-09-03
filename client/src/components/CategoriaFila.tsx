import React from 'react';
import { editCategory } from '../api/editCategory';
import { UseContexto } from '../context';
import { removeCategory } from '../api/removeCategoria';


export function CategoriaFila({ name, description, id_category, color }: CategoriesRes) {
    const [editar, setEditar] = React.useState(true);
    const [editarTexto, setEditarTexto] = React.useState<CategoriesRes>({name, description, id_category, color});
    const {actual} = UseContexto();
    const cambiar = {
        name:(e:React.ChangeEvent<HTMLInputElement>)=>setEditarTexto({...editarTexto, name:e.target.value}),
        description:(e:React.ChangeEvent<HTMLInputElement>)=>setEditarTexto({...editarTexto, description:e.target.value}),
        color:(e:React.ChangeEvent<HTMLInputElement>)=>setEditarTexto({...editarTexto, color:e.target.value})
    }
    const mandar = () =>{
        editCategory(editarTexto)
        .then(data=>{
            console.log(data);
            actual();
            setEditar(true);
        })
        .catch(error=>{
            console.log(error);
        });
    }
    const borrar = () => {
        removeCategory(id_category)
        .then(data=>{
            console.log(data);
            actual();
        })
        .catch(error=>{
            console.error(error);
            alert('Borre todos los videos primero antes de borrar esta categoria');
        });
    }
    return (
        <>
            {editar ? (
                <tr className="filas_tabla">
                    <td className='nombre'>{name}</td>
                    <td className='descripcion'>{description}</td>
                    <td className="editar" onClick={()=>setEditar(false)}>Editar</td>
                    <td className="remover" onClick={borrar}>Remover</td>
                </tr>
            ) : (
                <tr className="filas_tabla">
                    <td className='nombre'><input type="text" value={editarTexto.name} onChange={cambiar.name}/></td>
                    <td className='descripcion'><input type="text" value={editarTexto.description} onChange={cambiar.description}/></td>
                    <td className="editar"><input type="color" value={editarTexto.color} onChange={cambiar.color}/></td>
                    <td className="remover" onClick={mandar}>Aceptar</td>
                </tr>
            )}
        </>
    )
}
