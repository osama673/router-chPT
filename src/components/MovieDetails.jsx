import React from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "../data";
import { HiArrowLeftCircle } from "react-icons/hi2";

const MovieDetails = () => {
  const { id } = useParams();
  const currentMovie = data.find((m) => m.id == id);
  return (
    <div style={{ backgroundColor: "#212020", height: "100vh" }}>
      <div style={{ paddingLeft: 40, paddingTop: 20 }}>
        <Link to="/">
          <HiArrowLeftCircle size={50} color="#6d6c6c" />
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: 10,
          }}
        >
          <img
            src={currentMovie.imgUrl}
            alt="imgurl"
            width={350}
            height={500}
          />
        </div>

        <div style={{ padding: 20, width: 600, marginTop: 50 ,color:"white"}}>
          <div style={{ fontWeight: "bold", fontSize: 35, marginBottom: 20 }}>
            {currentMovie.title}
          </div>
          <div style={{ marginBottom: 20 }}>{currentMovie.desc}</div>
        </div>
        <iframe
          width="50%"
          height="300"
          src={currentMovie.trailer}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDetails;
