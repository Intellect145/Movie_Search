import React, { useState, useEffect } from 'react';
import './MovieList.css';
import Card from '../Card/Card';
import { useParams } from 'react-router-dom';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, [type]); // This ensures data is fetched whenever 'type' changes

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then(res => res.json())
      .then(data => setMovieList(data.results)) // Set the movies to state
      .catch(err => console.error(err)); // Handle errors
  };

  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list_cards">
        {
          movieList.map(movie => (
            <Card key={movie.id} movie={movie} /> // Added key={movie.id} for each Card component
          ))
        }
      </div>
    </div>
  );
};

export default MovieList;
