import React, { useState } from "react";
import GameCard from "./GameCard/GameCard";
import useAuth from "../../Hooks/useAuth";
import Loader from "../../Shared/Loader/Loader";
import NoGamesMessage from "./NoGamesMessage/NoGamesMessage";

const Games = () => {
  const [hovered, setHovered] = useState(null);
  const { result, isLoading } = useAuth();

  if (isLoading) return <Loader />;

  if (!isLoading && result?.length === 0) {
    return <NoGamesMessage />;
  }

  return (
    <div
      className="
    grid 
    grid-cols-2 /* ✅ Force 2 cards per row on mobile */
    sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] 
    md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] 
    gap-4 p-6
  "
    >
      {/* 🟢 Featured Game (first one) */}
      {result?.[0] && (
        <div
          className="
        col-span-2 row-span-2
        sm:col-span-2 sm:row-span-2
        md:col-span-2 md:row-span-2
      "
        >
          <GameCard
            game={result[0]}
            index={0}
            hovered={hovered}
            setHovered={setHovered}
            featured={true}
          />
        </div>
      )}

      {/* 🔵 Other Games */}
      {result?.slice(1).map((game, index) => (
        <GameCard
          key={index + 1}
          game={game}
          index={index + 1}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};

export default Games;
