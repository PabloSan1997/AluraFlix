import React from 'react';
import { addCategory } from '../api/addCategory';
import { UseContexto } from '../context';
import { AreaCategorias } from '../components/AreaCategorias';



const initalState:CategoriaNew = {
  name:'',
  description:'',
  color:'#000000'
}

export function AgregarCategoria() {
  const [newCategory, setNewCategory] = React.useState<CategoriaNew>(initalState);
  const cambiar = {
    name:(e:React.ChangeEvent<HTMLInputElement>)=>setNewCategory({...newCategory, name:e.target.value}),
    description:(e:React.ChangeEvent<HTMLTextAreaElement>)=>setNewCategory({...newCategory, description:e.target.value}),
    color:(e:React.ChangeEvent<HTMLInputElement>)=>setNewCategory({...newCategory, color:e.target.value})
  }
  const {actual, setLoading} = UseContexto();
  const agregar = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    addCategory(newCategory)
    .then(data=>{
      console.log(data);
      setLoading(true);
      actual();
      setNewCategory(initalState);
    })
    .catch(error=>{
      console.log(error);
    });

  }
  return (
    <>
    <h2 className="titulo_formulario">Nueva Categoría</h2>
      <form className="formulario formulario-categoria" onSubmit={agregar}>
        <div className="fila">
          <label htmlFor="">Nombre</label>
          <input type="text" className="entrada" value={newCategory.name} onChange={cambiar.name}/>
        </div>
        <div className="fila">
          <label htmlFor="">Descripcion</label>
          <textarea className="entrada area-texto" value={newCategory.description} onChange={cambiar.description}></textarea>
        </div>
        <div className="fila">
          <label htmlFor="">Color</label>
          <input type="color" className="entrada entrada_color" value={newCategory.color}  onChange={cambiar.color}/>
        </div>
        <div className="area_botones">
          <button type="submit" className='boton boton_azul'>Guardar</button>
          <button type="button" className='boton boton_gris' onClick={()=>setNewCategory(initalState)}>Limpiar</button>
          
        </div>
      </form>
      <AreaCategorias/>
    </>
  )
}
