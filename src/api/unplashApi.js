import { createApi } from "unsplash-js";

const API_ACCESS_KEY = import.meta.env.VITE_API_ACCESS_KEY;

export const api = createApi({
    accessKey: API_ACCESS_KEY
});

// Cambiar al fetch endpoint.