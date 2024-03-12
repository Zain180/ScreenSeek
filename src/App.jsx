import React, { useEffect, useState } from "react";
import config from "./config/config";
import { TextField } from "@mui/material";
import axios from "axios";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${config.apiKey}&sort_by=popularity.desc`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching popular movies:", error.message);
      }
    };

    fetchPopularMovies();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      const fetchMoviesBySearch = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${config.apiKey}&query=${searchQuery}`
          );
          setMovies(response.data.results);
        } catch (error) {
          console.error(
            "Error fetching movies by search query:",
            error.message
          );
        }
      };

      fetchMoviesBySearch();
    }
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex items-center justify-center flex-col relative bg-slate-100">
      <Navbar />
      <div className="sm:absolute top-0 right-10 sm:w-[500px] w-full sm:mt-10 m-[-10px] px-2">
        <TextField
          className="w-full"
          type="search"
          value={searchQuery}
          onChange={handleSearchInputChange}
          label="Search"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            imageUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            releaseDate={movie.release_date}
            uri={movie}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
