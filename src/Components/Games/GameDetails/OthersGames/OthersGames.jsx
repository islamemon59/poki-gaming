import React from "react";
import { Link } from "react-router";

const OthersGames = ({otherGames, hovered, setHovered}) => {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white text-center">
        Other Games
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {otherGames?.map((g) => (
          <Link
            key={g?._id}
            to={`/games/${g?._id}`}
            onClick={() => scrollTo(0, 0)}
            className="rounded-xl overflow-hidden shadow-md relative group aspect-square"
            onMouseEnter={() => setHovered(g?._id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={g?.thumbnail}
              alt={g?.title}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute bottom-0 left-0 w-full font-bold text-xs sm:text-sm bg-black/60 p-2 text-white text-center transform transition-transform duration-500 ${
                hovered === g?._id ? "translate-y-0" : "translate-y-full"
              }`}
            >
              {g?.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OthersGames;
