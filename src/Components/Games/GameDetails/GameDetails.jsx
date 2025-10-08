import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router";

const GameDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { data: games } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/games");
      return data;
    },
  });
  const { data: game } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:5000/games/${id}`);
      return data;
    },
  });
  const otherGames = games?.filter((g) => g?._id != id);
  console.log(game);

  if (!game)
    return <h2 className="text-center text-red-500">Game not found!</h2>;
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {/* Main Game */}
      <h1 className="text-2xl font-bold mb-4">{game?.title}</h1>
      <iframe
        src={game?.gameUrl}
        title={game?.title}
        className="w-[800px] h-[500px] rounded-xl shadow-lg mb-8"
        allowFullScreen
      ></iframe>

      {/* Recommended Games */}
      <h2 className="text-xl font-semibold mb-4">Other Games</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {otherGames.map((g) => (
          <Link
            key={g?._id}
            to={`/games/${g?._id}`}
            className="rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={g?.thumbnail}
              alt={g?.title}
              className="w-full h-32 object-cover"
            />
            <p className="text-center text-sm p-1 bg-black text-white">
              {g?.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GameDetails;
