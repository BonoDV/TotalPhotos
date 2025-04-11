import { createSlice } from '@reduxjs/toolkit';

const options = {
    name: "search",
    initialState: 0,
    reducers: {
        searchDescriptions: (state, action) => {
            return action.payload;
        }
    }
}


const favouritesSlice = createSlice(options);

// Exporta las acciones generadas automáticamente
export const { searchDescriptions } = favouritesSlice.actions;

// Exporta el reducer
export default favouritesSlice.reducer;