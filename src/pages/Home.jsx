import { useState } from "react"
import MovieCard from "../components/MovieCard"
import '../css/Home.css'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
    }

  return (
    <div className='home'>
      <form onSubmit={handleSearch} className='search-form'>
        <input 
        type='text' 
        placeholder='Search for movies'
        onChange={(e) => setSearchQuery(e.target.value)} 
        value={searchQuery} 
        className='search-input'
        />
        <button type='submit' className='search-button'>Search</button>
      </form>

        <div className='movies-grid'>
          {movies.map((movie) => (
            movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
    </div>
  )
}

export default Home
