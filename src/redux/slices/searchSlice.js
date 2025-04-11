import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk para la búsqueda de fotos con fetch
export const searchPhotos = createAsyncThunk(
    'search/searchPhotos',
    async (query, { rejectWithValue }) => {
        try {
            const params = new URLSearchParams({
                client_id: import.meta.env.VITE_API_ACCESS_KEY, // Usa variables de entorno
                query: query,
                orientation: 'landscape',
                per_page: 30
            });

            const response = await fetch(`https://api.unsplash.com/search/photos?${params}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Thunk para la búsqueda de fotos con fetch
export const searchRandomPhotos = createAsyncThunk(
    'search/searchRandomPhotos',
    async (_, { rejectWithValue }) => {
        try {
            const params = new URLSearchParams({
                client_id: import.meta.env.VITE_API_ACCESS_KEY, // Usa variables de entorno
                orientation: 'landscape',
                count: 30
            });

            const response = await fetch(`https://api.unsplash.com/photos/random?${params}`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Random photos data:', data); // Log para verificar los datos
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        inputValue: '',
        photosData: [],
        randomPhotosData: [], // Nuevo estado para fotos aleatorias
        loading: false,
        error: null
    },
    reducers: {
        setInputValue: (state, action) => {
            state.inputValue = action.payload;
        },
        // Elimina setLostFocus
        clearSearchData: (state) => {
            state.photosData = [];
        },
        clearRandomPhotos: (state) => {
            state.randomPhotosData = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchPhotos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchPhotos.fulfilled, (state, action) => {
                state.loading = false;
                state.photosData = action.payload;
            })
            .addCase(searchPhotos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Manejadores para searchRandomPhotos (nuevos)
            .addCase(searchRandomPhotos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchRandomPhotos.fulfilled, (state, action) => {
                state.loading = false;
                // La API de random puede devolver un array o un solo objeto
                state.photosData = Array.isArray(action.payload) ?
                    { results: action.payload } :
                    { results: [action.payload] };
            })
            .addCase(searchRandomPhotos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const {
    setInputValue,
    setLostFocus,
    clearSearchData,
    clearRandomPhotos,
    resetSearchState
} = searchSlice.actions;

export default searchSlice.reducer;