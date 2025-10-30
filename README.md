# React + Vite + TypeScript + Tailwind — Movie Search App(TMDB)

A single-page application for searching movies using the TMDB API, displays results and browsing popular movies with poster images, titles and ratings.


## Folder Structure
src/
  assets/
    Logo.svg
  components/
    Header.tsx
    MoviesCard.tsx
    MoviesList.tsx
  types.ts
  App.tsx
  main.tsx

## Components Overview

- **Header** – search bar and title
- **MoviesCard** – section wrapper for movies
- **MoviesList** – grid of individual movie cards
- **App** – main logic: holds state, handles API calls

## Fetch API Usage
The app uses the Fetch API (async function fetchPopularMovies) to retrieve movie data from TMDB.


```const fetchPopularMovies = async () => {
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
```

### Explanation:
- **fetch(...)** sends a GET request to the TMDB API.
- **await res.json()** parses the response as JSON.
- **setMovies(...)** updates the state with the movie list.
- **try/catch** nsures any errors during the request are caught and logged.


## Tech Stack

- **React** - UI library for building interactive views
- **Vite** - Lightning-fast build tool and dev server
- **TypeScript** - Type-safe JavaScript for better reliability
- **Tailwind CSS** - Utility-first CSS framework for styling

## Live Demo:
https://tanjasav.github.io/M4G4-React-Fetch-MovieSearchApp/