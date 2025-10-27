import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router";
import Loader from "../../../Shared/Loader/Loader";
import useDynamicTitle from "../../../Hooks/useDynamicTitle";
import logo from "../../../assets/logo.png";
import CategoryList from "../CategoryList/CategoryList";

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

  useDynamicTitle(`${game?.title || "title"}`);

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

  return (
<div className="relative flex flex-col items-center bg-black min-h-screen p-4 lg:pt-0">
  {/* === Layout Wrapper === */}
  <div className="flex flex-col lg:flex-row w-full gap-6">
    {/* === Left Ad (Desktop Only) === */}
    {leftAd && (
      <div className="hidden lg:block w-48 sticky top-24 self-start">
        <Link to={leftAd?.link} target="_blank" rel="noopener noreferrer">
          <img
            src={leftAd?.image}
            alt={leftAd?.title}
            className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
    )}

    {/* === Header / Logo === */}
    <div className="fixed z-50 top-3 left-3 lg:left-6">
      <Link to="/" className="block">
        <img
          src={logo}
          alt="Logo"
          className="w-20 lg:w-32 hover:scale-105 transition-transform duration-300"
        />
      </Link>
    </div>

    {/* === Main Content === */}
    <div className="flex-1">
      {/* === Game Frame === */}
      <div className="mt-6 mb-6 aspect-video rounded-xl overflow-hidden shadow-2xl border border-red-700/30">
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

      {/* === Bottom Ads === */}
      {bottomAds?.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {bottomAds.map((ad) => (
            <Link
              key={ad?._id}
              to={ad?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 h-20 sm:w-52 sm:h-28 md:w-64 md:h-32 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
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

      {/* === Recommended Games === */}
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

      {/* === Category List === */}
      <div className="mt-8">
        <CategoryList />
      </div>

      {/* === Game Description === */}
      <div className="mt-10 bg-gray-900 rounded-xl p-6 shadow-lg border border-red-700/30 text-white max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Thumbnail */}
          {game?.thumbnail && (
            <img
              src={game.thumbnail}
              alt={game.title}
              className="w-full md:w-64 h-40 md:h-48 object-cover rounded-lg shadow-md flex-shrink-0"
            />
          )}

          {/* Game Info */}
          <div className="flex-1 flex flex-col justify-between">
            <h3 className="text-2xl font-bold mb-2">{game?.title}</h3>
            {game?.category && (
              <p className="text-sm font-semibold text-red-500 mb-4">
                Category:{" "}
                <span className="text-white">{game.category}</span>
              </p>
            )}
            {game?.description ? (
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {game.description}
              </p>
            ) : (
              <p className="text-gray-500 text-sm italic">
                No description available.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* === Right Ad (Desktop Only) === */}
    {rightAd && (
      <div className="hidden lg:block w-48 sticky top-24 self-start">
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
