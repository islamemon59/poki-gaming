import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import GameCard from "./GameCard/GameCard";
import Masonry from "react-masonry-css";

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
    const breakpointColumns = {
    default: 6,
    1100: 4,
    700: 3,
    500: 2,
  };
  return (
<Masonry
      breakpointCols={breakpointColumns}
      className="flex gap-4 p-6"
      columnClassName="bg-clip-padding"
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
    </Masonry>
  );
};

export default Games;
