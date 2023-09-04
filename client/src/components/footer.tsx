import letras from '../assets/letras.svg';
import '../styles/footer.scss';

export  function Footer() {
  return (
    <footer>
        <img src={letras} alt="pie" className="letra" />
        <p className="texto">Site hecho por <a target="_blank" href="https://github.com/PabloSan1997/aluraflix">Jose Pablo</a> para el #challenge de <span>Alura Latam</span>
        </p>
    </footer>
  )
}
