import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../slices/searchSlice'; // Asegúrate que la ruta es correcta

const store = configureStore({
    reducer: {
        search: searchReducer // Aquí pasamos el reducer correctamente
    }
});

export default store;