import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Provedor } from './context';
import './styles/index.scss';

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLDivElement);

root.render(
    <Provedor>
        <App />
    </Provedor>
);