

import { useEffect, useState, FormEvent } from 'react';
import Header from './components/Header';
import MoviesCard from './components/MoviesCard';
import type {Movie} from './types'



// API constants
const API_KEY = '91d9451eeb56a7a82a1f36e7415f433d';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch popular movies
  const fetchPopularMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
      );
      const data = await res.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  };

  // Search movies
  const handleSearchSubmit = async (e?: FormEvent) => {
    if (e) e.preventDefault();

    if (searchTerm.trim() === '') {
      fetchPopularMovies();
      return;
    }

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          searchTerm
        )}&api_key=${API_KEY}`
      );
      const data = await res.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  // Load popular movies on mount
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <main className="container mx-auto px-4 py-6">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSearchSubmit={handleSearchSubmit}
      />
      <MoviesCard data={movies} img={IMAGE_PATH} />
    </main>
  );
};

export default App;

