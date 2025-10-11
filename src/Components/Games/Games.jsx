import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import GameCard from "./GameCard/GameCard";
import Masonry from "react-masonry-css";
import Loader from "../../Shared/Loader/Loader";

const Games = () => {
  const [hovered, setHovered] = useState(null);
  const { data: games, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/games");

      return data;
    },
  });

  if (isLoading) return <Loader />;
  return (
<div
  className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-4 p-6"
>
  {games?.map((game, index) => (
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
