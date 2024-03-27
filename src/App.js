import React from 'react'
import MovieData from './MovieData'
// step - 2 import useEffect
import { useEffect,useState } from 'react';
import './App.css' // this is how you link a sheet with this sleet in react js
import SearchIcon from './Search.svg'
// 9860a1d4

// step - 1 (get the apikey)
const API_URL = 'http://www.omdbapi.com?apikey=9860a1d4'
const movie1 = {
  "Title": "Thor",
  "Year": "2011",
  "imdbID": "tt0800369",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
}

function App() {
  const [movies , setmovies] = useState([]);
  const [search, setSearch] = useState('');

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
  }

  //step-3: innitiate the use effect
  useEffect(()=>{
    searchMovies(search);
  }, []);

  return (
    <div className='app'>
      <h1>Air Movie</h1>
      <div className='search'>
      <input
      placeholder='search' value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
      <img
        src={SearchIcon}
        alt='search'
        onClick={()=>searchMovies(search)}
      />
      </div>
      {
        movies?.length >0 
        ? (
          <div className='container'>
            {movies.map((movie)=>(
              <MovieData movie={movie}/>
            ))}
      </div>
        ) : (
          <div className='empty'>
            <h2>No Movies Found</h2>
          </div>
        )
      }
    </div>
  )
}

export default App