import React, { useState } from 'react';
import Photo from '../components/Photo';
import '../styles/Home.css';
import ModalDeleteConfirmation from '../components/ModalDeleteConfirmation';
import PhotoDescription from '../components/PhotoDescription';

function Favorites() {
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [photoToDelete, setPhotoToDelete] = useState(null);

    const handleDeleteClick = (photo) => {
        setPhotoToDelete(photo);
        setDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        if (photoToDelete) {
            localStorage.removeItem(`favorite-${photoToDelete.id}`);
            // Actualiza tu estado para reflejar el cambio
            setDeleteModalOpen(false);
            setPhotoToDelete(null);
        }
    };

    // Obtener todas las fotos favoritas del localStorage
    const getFavoritePhotos = () => {
        const favorites = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('favorite-')) {
                let photo = JSON.parse(localStorage.getItem(key));
                /* photo = JSON.stringify(localStorage.getItem(key)); */
                favorites.push(photo);
            }
        }
        return favorites;
    };

    const favoritePhotos = getFavoritePhotos();

    const divStyle = {
        backgroundColor: '#ECE6F0',
        display: 'flex',          // Activa Flexbox
        justifyContent: 'center', // Centra horizontalmente

    }

    const selectStyle = {
        width: '240px',
        height: '40px',
        margin: '15px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #D9D9D9',
        borderRadius: '8px',
        padding: '10px',
        fontSize: '16px',
        textAlign: 'center',
    }

    return (
        <div>
            <div style={divStyle}>
                <select
                    className="form-select"
                    aria-label="Sort by"
                    style={selectStyle}
                    onChange={(e) => {
                        // Aquí puedes implementar la lógica de ordenación
                        console.log('Ordenar por:', e.target.value);
                    }}
                >
                    <option value="1">Importation Date</option>
                    <option value="2">Width</option>
                    <option value="3">Height</option>
                    <option value="4">Likes</option>
                </select>
            </div>

            <div className='homeDiv'>
                {favoritePhotos.length > 0 ? (
                    favoritePhotos.map(photo => (
                        console.log(photo),
                        <div>
                            <Photo
                                id={photo.id}
                                url={photo.url}
                                description={photo.description}
                                width={photo.width}
                                height={photo.height}
                                likes={photo.likes}
                                title={photo.title || 'No Title'}

                            /><PhotoDescription
                                title={photo.title || 'No Title'}
                                description={photo.description}
                                width={photo.width}
                                height={photo.height}
                                likes={photo.likes} />

                        </div>
                    ))
                ) : (
                    <div className="no-favorites">
                        <p>No tienes fotos favoritas aún</p>
                    </div>
                )}
            </div><ModalDeleteConfirmation
                open={deleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                photoTitle={photoToDelete?.description}
            />
        </div>
    );
}

export default Favorites;

