import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "./Home.css";
import MovieList from "../../components/MovieList/MovieList";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=8c63d522abdf5bbf636af257bc7f195a&language=en-US&page=1"
    )
      .then((result) => result.json())
      .then((data) => setPopularMovies(data.results));
  }, []);
  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {popularMovies.map((movie) => (
          <Link
            style={{ TextDecoder: "none", color: "white" }}
            to={`/movie/${movie.id}`}
          >
            <div className="posterImage">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              />
            </div>
            <div className="posterImage_overlay">
              <div className="posterimage_title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="posterImage_runtime">
                {movie ? movie.release_date : ""}
                <span className="posterImage_rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="posterImage_description">
                {movie ? movie.overview : ""}
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
      <MovieList />
    </div>
  );
};

export default Home;
