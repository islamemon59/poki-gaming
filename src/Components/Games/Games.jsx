import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import GameCard from "./GameCard/GameCard";
import Loader from "../../Shared/Loader/Loader";
import useAuth from "../../Hooks/useAuth";

const Games = () => {
  const [hovered, setHovered] = useState(null);
  const {result} = useAuth()


  return (
<div
  className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 gap-4 p-6"
>
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
