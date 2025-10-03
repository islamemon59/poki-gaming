import React from "react";
import { Link } from "react-router";

const GameCard = ({ game, setHovered, hovered, index }) => {
  console.log(game);
  return (
    <Link
      key={index}
      href={game?.link}
      className="relative group rounded-xl overflow-hidden shadow-lg"
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      {/* Thumbnail */}
      <img
        src={game?.thumbnail}
        alt={game?.title}
        className={`w-full h-40 object-cover transition duration-300 ${
          hovered === index ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Preview Video on Hover */}
      {hovered === index && (
        <iframe
          src={game?.previewVideo}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen"
        ></iframe>
      )}

      {/* Game Title */}
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-sm p-1 text-center">
        {game?.title}
      </div>
    </Link>
  );
};

export default GameCard;
