import React from "react";
import ReactStars from "react-stars";
import { VscDebugRestart } from "react-icons/vsc";
import { Outlet } from "react-router-dom";

function NavBar({ setSearch, setRate, rating }) {
  return (
    <div>
      <div className="bg-img">
        <div className="container">
          <div className="topnav">
            <button className="restart-button">
              <VscDebugRestart
                onClick={() => {
                  setRate(0);
                }}
                size={23}
                color="white"
              />
            </button>
            <ReactStars
              count={5}
              size={24}
              value={rating}
              edit={true}
              half={false}
              activeColor="#ffd700"
              onChange={(newRating) => {
                setRate(newRating);
              }}
            />
            <a href="#home">Home</a>
            <a href="#movies">Movies</a>
            <a href="#tv shows">TV Shows</a>
            <a href="#blog">Blog</a>
            <a href="#pages">Pages</a>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                name="search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button type="submit">Search</button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default NavBar;
