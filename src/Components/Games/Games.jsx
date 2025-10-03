import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import GameCard from "../GameCard/GameCard";

const Games = () => {
  const [hovered, setHovered] = useState(null);
  const { data: games } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/games");

      return data;
    },
  });
  console.log(games);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6">
      {games?.map((game, index) => (
        <GameCard
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
