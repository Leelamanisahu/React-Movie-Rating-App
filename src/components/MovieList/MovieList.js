import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import "./MovieList.css";
import { useParams } from "react-router-dom";

const MovieList = () => {
  const [movieList, setMoviesList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=8c63d522abdf5bbf636af257bc7f195a&language=en-US&page=1`
    )
      .then((result) => result.json())
      .then((data) => setMoviesList(data.results));
  };

  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "popular").toUpperCase()}</h2>
      <div className="list_cards">
        {movieList?.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
