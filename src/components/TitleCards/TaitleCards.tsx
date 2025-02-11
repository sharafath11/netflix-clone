import React, { useEffect, useRef } from 'react';
import cardData from "../../assets/cards/Cards_data";
import "./TaitleCarts.css";

const TitleCards = ({title,category}:{title:string |null,category:string|null}) => {
  interface Card {
    image: string;
    movie: string;
  }

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
        {cardData.map((card: Card, index: number) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.movie} />
            <p>{card.movie}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
