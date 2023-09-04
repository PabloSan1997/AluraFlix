import letras from '../assets/letras.svg';
import '../styles/footer.scss';

export  function Footer() {
  return (
    <footer>
        <img src={letras} alt="pie" className="letra" />
    </footer>
  )
}
