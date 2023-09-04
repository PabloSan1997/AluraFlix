import { Portada } from "../components/Portada";
import { SeccionCategory } from "../components/SeccionCategory";
import { UseContexto } from "../context"




export function Home() {
  const { categoriaVideos } = UseContexto();
  return (
    <>
      <Portada />
      <div className="videos">
        {categoriaVideos.map(elemetno => (
          <SeccionCategory key={elemetno.id_category} {...elemetno} />
        ))}
      </div>
    </>
  )
}
