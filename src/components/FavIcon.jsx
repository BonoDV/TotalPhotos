import React from 'react';
import '../styles/FavIcon.css'; // Asegúrate de que la ruta sea correcta
const FavIcon = ({ onClick }) => {
    return (
        <div className="fav-icon-container">
            <button
                style={{
                    border: 'none',
                    background: 'none',
                    padding: 0, // Eliminar padding por defecto
                    cursor: 'pointer' // Cambiar cursor al pasar el mouse
                }}
                onClick={(e) => {
                    e.stopPropagation();  // Evita que el evento se propague
                    if (onClick) onClick();  // Ejecuta la función onClick si existe
                }}
            >
                <img
                    src="/src/assets/favIcon.svg"
                    alt="Favorito"
                    className="fav-icon"
                    style={{
                        display: 'block', // Eliminar espacio extra debajo de la imagen
                        width: '24px', // Tamaño fijo
                        height: '24px', // Tamaño fijo
                        objectFit: 'contain' // Mantener relación de aspecto
                    }}
                />
            </button>
        </div>
    );
};

export default FavIcon;