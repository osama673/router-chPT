import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { data } from "../data";
import { Button, Form } from "semantic-ui-react";

function MOvieList({ search, rate }) {
  const [movies, setMovies] = useState(data);
  const [newMovie, setNewMovie] = useState({});

  const handleAddNewMovie = () => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div>
      <div className="movies-list-container">
        <div className="add-button">
          <Form>
            <Form.Group widths={"equal"}>
              <Form.Input
                type="texte"
                placeholder="Title"
                onChange={(e) => {
                  setNewMovie({ ...newMovie, title: e.target.value });
                }}
              />
              <Form.Input
                type="texte"
                placeholder="Movie URL"
                onChange={(e) => {
                  setNewMovie({ ...newMovie, imgUrl: e.target.value });
                }}
              />
              <Form.Input
                type="number"
                min={1}
                max={5}
                onChange={(e) => {
                  setNewMovie({ ...newMovie, rating: e.target.value });
                }}
              />
              <Form.Input
                type="texte"
                placeholder="Description"
                onChange={(e) => {
                  setNewMovie({ ...newMovie, desc: e.target.value });
                }}
              />
              <Form.Input
                type="texte"
                placeholder="Cast"
                onChange={(e) => {
                  setNewMovie({ ...newMovie, cast: e.target.value });
                }}
              />
            </Form.Group>
            <Button
              style={{ backgroundColor: "#1E70BF" }}
              onClick={() => {
                handleAddNewMovie();
              }}
            >
              Add Movie
            </Button>
          </Form>
        </div>
        <h1>Top movies</h1>
        <div className="movies-list-cards-container">
          {movies
            .filter((movie) =>
              movie.title.toLowerCase().includes(search.toLowerCase())
            )
            .filter((movie) => (rate ? movie.rating === rate : movie))
            .reverse()
            .map((movie, i) => (
              <MovieCard key={i} {...movie} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default MOvieList;
