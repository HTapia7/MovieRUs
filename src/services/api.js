const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_API_BASE_URL}`);
    if (!response.ok) {
        throw new Error('Failed to fetch popular movies');
    }
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${import.meta.env.VITE_API_BASE_URL}&query=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
        throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data.results;
};


