
import React from 'react'
import { UseContexto } from '../context'
import { CategoriaFila } from './CategoriaFila';


export  function AreaCategorias() {
    const {categorias} = UseContexto();
  return (
    <table className="tabla">
        <tbody>
            <tr className='titulo'>
                <th className='nombre'>Nombre</th>
                <th className='descripcion'>Descripcion</th>
                <th className="editar">Editar</th>
                <th className="remover">Remover</th>
            </tr>
            {categorias.map(elemnto=>(
                <CategoriaFila key={elemnto.id_category} {...elemnto}/>
            ))}
        </tbody>
    </table>
  )
}
