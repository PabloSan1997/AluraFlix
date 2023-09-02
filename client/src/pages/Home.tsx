import { SeccionCategory } from "../components/SeccionCategory";
import { UseContexto } from "../context"




export function Home() {
  const {categoriaVideos} = UseContexto();
  return (
    <div className="videos">
      {categoriaVideos.map(elemetno=>(
        <SeccionCategory key={elemetno.id_category} {...elemetno}/>
      ))}
    </div>
  )
}
