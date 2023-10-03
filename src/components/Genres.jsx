import React from "react";
import { useEffect, useState } from "react";
import "../styles/Genres.css";

const Genres = ({ genres, selectedGenre, handleGenresSelect }) => {



  return (
    <div className="genre-section" >
      <h1>Generes</h1>
      <div className="genre-list" >
        {genres.map(genre => (
          <button key={genre.id} onClick={() => handleGenresSelect(genre.id)} style={{ backgroundColor: selectedGenre === genre.id ? 'lightblue' : 'white', }} >{genre.name}</button>
        ))}
      </div>
    </div>
  )
}

export default Genres;