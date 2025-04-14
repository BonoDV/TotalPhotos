import '../styles/Photo.css';
import FavIcon from './FavIcon';

function Photo(props) {
    return (
        <div className='photo-container'>
            <img
                src={props.url}
                alt={props.title}
                className='photo-image'
            />
            <FavIcon />
        </div>
    );
}

export default Photo;