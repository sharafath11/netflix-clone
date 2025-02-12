import React, { useEffect, useRef, useState } from 'react';
import "./TaitleCarts.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const TitleCards = ({title,category}:{title:string|null,category:string|null}) => {
  interface Movie {
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  console.log(category ,"casdfg")
  const [movieData,setMovieData]=useState<Movie[]>([])
  const url:string = `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2ZlNDM2NDZjNmE0ZTJlMjcyMGRiNjE2ZWJjOGY2NyIsIm5iZiI6MTY5MDk5Mjg4Mi45MTkwMDAxLCJzdWIiOiI2NGNhODBmMjBjYjMzNTE3YzRlYmU4NjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NEa3e3jnNYMsfKNsor_cwgagO3Bd4tfN0oyQ-nsG4Og'
  }
};
 useEffect(()=>{
  axios.get(url, options)
  .then(response => setMovieData(response.data.results))
  .catch(error => console.error(error));
 },[])

  const cardsRef = useRef<HTMLDivElement | null>(null);
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const currentRef = cardsRef.current;
    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel);
    }
    
  }, []);

  return (
    <div className="title-cards">
      <h2>{title?title:'Populer on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {movieData.map((movie, index: number) => (
          <Link to={`/player/${movie.id}`}>
          <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
