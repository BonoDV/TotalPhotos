import { createContext, useContext } from 'react';

export const PhotosContext = createContext();

// Hook personalizado para acceder al contexto
export const usePhotos = () => {
    return useContext(PhotosContext);
};