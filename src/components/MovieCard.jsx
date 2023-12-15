import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function MovieCard({ id, title, imgUrl, rating, desc, cast }) {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();
  return (
    <div
      className={`movie-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate("/movie/" + id, { replace: true })}
    >
      <img src={imgUrl} alt={title} />
      <div className="movie-details">
        <h2>{title}</h2>
        <p>{desc}</p>
        <p>Rating: {rating}/5</p>
        <p>Cast: {cast}</p>
      </div>
    </div>
  );
}

export default MovieCard;
