


export function SeccionCategory({name, color, description}:CategoriesRes) {
  const estilo = {
    background:color
  };
  return (
    <div className="seccion">
      <h2 style={estilo}>{name}</h2>
      <p className="description">{description}</p>
    </div>
  )
}
