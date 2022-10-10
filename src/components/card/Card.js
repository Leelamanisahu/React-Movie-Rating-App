import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoding(false);
    }, 1500);
  }, []);
  return (
    <div>
      {isLoding ? (
        <div className="cards">
          <SkeletonTheme color="#0202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ TextDecoration: "none", color: "white" }}
        >
          <div className="cards" key={movie.id}>
            <img
              className="cards_img"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            />
            <div className="cards_overlay">
              <div className="cards_title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="card_runtime">
                {movie ? movie.release_date : ""}
                <span className="card_ratin">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="cards_description">
                {movie ? `${movie.overview.slice(0, 118)}...` : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Card;
