import React, { useState } from "react";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <NavBar setSearch={setSearch} setRate={setRate} rating={rate} />
          }
        >
          <Route path="/" element={<MovieList rate={rate} search={search} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
