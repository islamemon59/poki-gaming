import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router";
import Loader from "../../../Shared/Loader/Loader";

const GameDetails = () => {
  const { id } = useParams();
  const [hovered, setHovered] = useState(null);

  // Fetch all games
  const { data: games } = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/games");
      return data;
    },
  });

  // Fetch single game
  const { data: game, isLoading } = useQuery({
    queryKey: ["game", id],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:5000/games/${id}`);
      return data;
    },
  });

  // Fetch ads
  const { data: ads } = useQuery({
    queryKey: ["ads"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/ads");
      return data?.ads || [];
    },
  });

  const otherGames = games?.filter((g) => g?._id !== id);

  if (isLoading) return <Loader />;

  if (!game)
    return <h2 className="text-center text-red-500">Game not found!</h2>;

  const isValidUrl = (url) =>
    url && (url.startsWith("http://") || url.startsWith("https://"));

  // Separate ads by position
  const leftAd = ads?.find((ad) => ad.position === "left");
  const rightAd = ads?.find((ad) => ad.position === "right");
  const bottomAds = ads?.filter((ad) => ad.position === "bottom");

  console.log("right add",rightAd?.link);
  console.log("bottom add",bottomAds?.link);
  console.log("left add",leftAd?.link);

  return (
<div className="flex flex-col items-center bg-black min-h-screen p-4 lg:pt-0">
  {/* Main Content + Ads */}
  <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-6">
    {/* Left Ad (hidden on small) */}
    {leftAd && (
      <div className="hidden lg:block w-48 sticky top-20 self-start">
        <Link to={leftAd?.link} target="_blank" rel="noopener noreferrer">
          <img
            src={leftAd?.image}
            alt={leftAd?.title}
            className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
    )}

    {/* Main Game */}
    <div className="flex-1">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-white">
        {game?.title}
      </h1>

      {/* Game Frame */}
      <div className="w-full aspect-video mb-8 rounded-xl overflow-hidden shadow-2xl border border-red-700/30">
        {isValidUrl(game?.gameUrl) ? (
          <iframe
            src={game?.gameUrl}
            title={game?.title}
            allowFullScreen
            className="w-full h-full border-0"
          ></iframe>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900 text-gray-300">
            <p className="text-lg font-semibold mb-3 text-center">
              ⚠️ Invalid game URL — cannot display game
            </p>
            {game?.thumbnail && (
              <img
                src={game?.thumbnail}
                alt={game?.title}
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-md"
              />
            )}
          </div>
        )}
      </div>

      {/* Bottom Ads */}
      {bottomAds?.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {bottomAds?.map((ad) => (
            <Link
              key={ad?._id}
              to={ad?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 h-24 sm:w-52 sm:h-28 md:w-64 md:h-32 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={ad?.image}
                alt={ad?.title}
                className="w-full h-full object-cover"
              />
            </Link>
          ))}
        </div>
      )}

      {/* Recommended Games */}
      <h2 className="text-xl md:text-2xl font-semibold mb-4  text-white text-center">
        Other Games
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {otherGames?.map((g) => (
          <Link
            key={g?._id}
            to={`/games/${g?._id}`}
            className="rounded-xl overflow-hidden shadow-md relative group aspect-square"
            onMouseEnter={() => setHovered(g?._id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={g?.thumbnail}
              alt={g?.title}
              className="w-full h-28 sm:h-32 md:h-36 lg:h-40 object-cover aspect-square"
            />
            <div
              className={`absolute text-xs sm:text-sm bottom-0 left-0 w-full font-bold bg-black/60 p-1.5 sm:p-2 text-white text-center transform transition-transform duration-500 ${
                hovered === g?._id ? "translate-y-0" : "translate-y-full"
              }`}
            >
              {g?.title}
            </div>
          </Link>
        ))}
      </div>
    </div>

    {/* Right Ad (hidden on small) */}
    {rightAd && (
      <div className="hidden lg:block w-48 sticky top-20 self-start">
        <Link to={rightAd?.link} target="_blank" rel="noopener noreferrer">
          <img
            src={rightAd?.image}
            alt={rightAd?.title}
            className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
    )}
  </div>
</div>

  );
};

export default GameDetails;
