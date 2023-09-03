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
  const {actual} = UseContexto();
  const agregar = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    addCategory(newCategory)
    .then(data=>{
      console.log(data);
      actual();
    })
    .catch(error=>{
      console.log(error);
    });

  }
  return (
    <>
      <form className="formulario formulario-categoria" onSubmit={agregar}>
        <div className="fila">
          <label htmlFor="">Nombre</label>
          <input type="text" className="entrada" value={newCategory.name} onChange={cambiar.name}/>
        </div>
        <div className="fila">
          <label htmlFor="">Descripcion</label>
          <textarea className="entrada" value={newCategory.description} onChange={cambiar.description}></textarea>
        </div>
        <div className="fila">
          <label htmlFor="">Color</label>
          <input type="color" className="entrada" value={newCategory.color}  onChange={cambiar.color}/>
        </div>
        <div className="area-boton">
          <button type="submit">Guardar</button>
          <button type="button" onClick={()=>setNewCategory(initalState)}>Limpiar</button>
        </div>
      </form>
      <AreaCategorias/>
    </>
  )
}
