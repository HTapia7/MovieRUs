import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        setError("Failed to load movies.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if(!searchQuery.trim()) return
    if(loading) return

    setLoading(true)

    try {
      const searchResult = await searchMovies(searchQuery);
      setMovies(searchResult)
      setError(null)

    } catch (error) {
      setError("failed to search movies...")
      console.log(error)
    } finally{
      setLoading(false)
    }
    setSearchQuery("")
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
