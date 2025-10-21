import React from "react";
import Loader from "../../../Shared/Loader/Loader";

import {
  FaChess,
  FaPuzzlePiece,
  FaFutbol,
  FaGamepad,
  FaDice,
} from "react-icons/fa";
import useGameCategories from "../../../Hooks/useGameCategory";
import { useNavigate } from "react-router";

const CategoryList = () => {
  const { data: categories, isLoading } = useGameCategories();
  const navigate = useNavigate()

  const categoryIcons = {
    Board: <FaChess color="#FF6B6B" />,
    "Board Games": <FaDice color="#4ECDC4" />,
    Card: <FaGamepad color="#FFD93D" />,
    Casual: <FaGamepad color="#FF6B6B" />,
    "Farm Games": <FaPuzzlePiece color="#4ECDC4" />,
    "Management Games": <FaPuzzlePiece color="#FFD93D" />,
    Puzzle: <FaPuzzlePiece color="#FF6B6B" />,
    Racing: <FaGamepad color="#1A535C" />,
    "Skill Games": <FaGamepad color="#FF6B6B" />,
    "Soccer Games": <FaFutbol color="#4ECDC4" />,
    "Strategy Games": <FaChess color="#FFD93D" />,
  };

  // Colors for new categories
  const defaultColors = ["#FF6B6B", "#4ECDC4", "#FFD93D", "#1A535C", "#FF9F1C"];
  const defaultIcon = <FaGamepad />;

  const getCategoryIcon = (category) => {
    if (categoryIcons[category]) return categoryIcons[category];

    const color =
      defaultColors[Math.floor(Math.random() * defaultColors.length)];
    return React.cloneElement(defaultIcon, { color });
  };

  if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
      {categories.map((cat) => (
        <div
        onClick={() => {navigate(`/category/${cat}`), scrollTo(0, 0)}}
          key={cat}
          className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          {/* Big Icon */}
          <div className="text-6xl mb-4">{getCategoryIcon(cat)}</div>
          {/* Category Name */}
          <span className="font-semibold text-gray-800 text-lg text-center">
            {cat}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
