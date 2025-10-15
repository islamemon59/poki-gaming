import React, { useState } from "react";
import GameCard from "./GameCard/GameCard";
import useAuth from "../../Hooks/useAuth";
import Loader from "../../Shared/Loader/Loader";

const Games = () => {
  const [hovered, setHovered] = useState(null);
  const { result, isLoading } = useAuth();

  if (isLoading) return <Loader/>



  if (!isLoading && result?.length === 0) {
    return (
<div className="flex flex-col min-h-screen justify-center items-center h-80 text-gray-400 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a] rounded-2xl  shadow-xl mx-4 md:mx-20">
  <div className="flex flex-col items-center space-y-4 animate-fadeIn">
    {/* 🎮 Icon or Emoji */}
    <div className="text-5xl">🎮</div>

    {/* Main Message */}
    <h2 className="text-2xl font-semibold text-white tracking-wide">
      No Games Found
    </h2>

    {/* Subtext */}
    <p className="text-gray-500 text-sm md:text-base text-center px-6">
      We couldn’t find any games matching your search.  
      Try adjusting your filters or come back later!
    </p>

    {/* Optional Retry Button */}
    <button
      className="mt-4 px-6 py-2 rounded-lg border border-red-600 text-red-500 font-medium hover:bg-red-600 hover:text-white transition-all duration-300"
      onClick={() => window.location.reload()}
    >
      Try Again
    </button>
  </div>
</div>

    );
  }

  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-4 p-6">
      {result?.map((game, index) => (
        <GameCard
          key={index}
          game={game}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};

export default Games;
