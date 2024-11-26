import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
   <>
      <MovieCard movie={{title: "My film" , release_date: "2024"}}/>
      <MovieCard movie={{title: "My new film" , release_date: "2025"}}/>
   </>
  )
}

export default App
