import '../styles/Photo.css';
import FavIcon from './FavIcon';
import { useLocation } from 'react-router-dom';

function Photo(props) {
    const location = useLocation();
    const handleFavoriteClick = () => {
        if (location.pathname === '/') {
            // Aquí puedes manejar la lógica para marcar la foto como favorita
            localStorage.setItem(`favorite-${props.id}`, JSON.stringify(props));
        }

    }

    return (
        <div className='photo-container'>
            <img
                src={props.url}
                alt={props.title}
                className='photo-image'
            />
            <FavIcon onClick={handleFavoriteClick} />
        </div>
    );
}

export default Photo;