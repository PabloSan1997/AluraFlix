import { obtenerColorContraste } from "../utilities/color";
import { CajaVideo } from "./CajaVideo";
import '../styles/seccionCategory.scss';
import React from 'react';

export function SeccionCategory({ name, color, description, videos }: CategoriesRelationRes) {
  const estilo = {
    background: color,
    color: obtenerColorContraste(color)
  };
  const limite = 2;
  const [slider, setSlider] = React.useState(0);

  
  const margen = {
    marginLeft: `${slider}%`,
    transition: 'margin-left 0.5s ease',
    width: `${videos.length * 100}%`
  }

  const moverDerecha = () => {
    if (slider > (100 - videos.length * 100)) {
      setSlider(slider - 100);
    }
  }
  const moverIzquierda = () => {
    if (slider < 0) {
      setSlider(slider + 100);
    }
  }
  return (
    <div className="seccion">
      <div className="area_titulo">
        <h2 style={estilo}>{name}</h2>
        <p className="description">{description}</p>
      </div>
      <div className="areaVideos" >
        <div className="cuadroVideo">
          <div className="slider" style={margen}>
            {videos.map(elemento => (
              <CajaVideo key={elemento.id_video} {...elemento} color={color} onSlider={setSlider} />
            ))}
          </div>
        </div>
        {videos.length > limite && (
          <div className="areaBotones">
            <button onClick={moverIzquierda}>←</button>
            <button onClick={moverDerecha}>→</button>
          </div>
        )}
      </div>
    </div>
  )
}
