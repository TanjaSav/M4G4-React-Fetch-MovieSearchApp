import { useEffect, useState, ChangeEvent } from 'react';
import logo from '../assets/logo.svg';
import MoviesCard from './MoviesCard';
import type {Movie} from '../types'


const API_KEY = '91d9451eeb56a7a82a1f36e7415f433d';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

// Header State
const Header = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState('');

  // Universal fetch function
  const fetchMovies = async (url: string) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  // Load popular movies by default
  useEffect(() => {
    fetchMovies(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
    );
  }, []);

  // Handle search input
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => { // - Updates the query state when the user types
    const value = e.target.value;
    setQuery(value);

    // Builds the correct API endpoint
    const endpoint = value.trim()
      ? `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          value
        )}&api_key=${API_KEY}`
      : `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

    fetchMovies(endpoint);
  };

  return (
    <>
      <header className="bg-orange-500 py-3 shadow-white my-12 rounded">
        <div className="flex justify-between items-center px-4">
          <div className="flex items-center mr-20">
            <img src={logo} alt="Logo" className="pr-5" />
            <h2 className="text-white font-bold text-2xl ml-2">Movies</h2>
          </div>
          <div>
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search the movie"
              className="px-5 py-3 border rounded text-gray-700 w-full outline-none bg-white"
            />
          </div>
        </div>
      </header>

      <MoviesCard data={movies} img={IMG_PATH} />
    </>
  );
};

export default Header;