import React, { useState } from 'react';
import '../styles/Photo.css';
import FavIcon from './FavIcon';
import { useLocation } from 'react-router-dom';
import ModalDeleteConfirmation from './ModalDeleteConfirmation'; // Asume que tienes este componente

function Photo(props) {
    const location = useLocation();
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleFavoriteClick = () => {
        if (location.pathname === '/') {
            // Guardar en favoritos si estamos en la página principal
            localStorage.setItem(`favorite-${props.id}`, JSON.stringify(props));
        } else {
            // Mostrar modal de confirmación en otras páginas
            setShowDeleteModal(true);
        }
    };

    const handleConfirmDelete = () => {
        // Eliminar de favoritos
        localStorage.removeItem(`favorite-${props.id}`);
        setShowDeleteModal(false);
        // Opcional: llamar a una función prop para actualizar el estado padre
        if (props.onRemove) {
            props.onRemove(props.id);
        }
        // Recargar el componente
        window.location.reload();
    };

    const handleCloseModal = () => {
        setShowDeleteModal(false);
    };

    return (
        <>
            <div className='photo-container'>
                <img
                    src={props.url}
                    alt={props.title}
                    className='photo-image'
                />
                <FavIcon onClick={handleFavoriteClick} />
            </div>

            {/* Modal de confirmación */}
            <ModalDeleteConfirmation
                open={showDeleteModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
                photoTitle={props.title}
            />
        </>
    );
}

export default Photo;