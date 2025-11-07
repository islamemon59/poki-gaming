import React from "react";
import Loader from "../../../Shared/Loader/Loader";

import {
  FaChess,
  FaDice,
  FaGamepad,
  FaPuzzlePiece,
  FaFutbol,
  FaCar,
  FaHatWizard,
  FaGun,
  FaBrain,
  FaMusic,
  FaCubes,
  FaBook,
  FaDragon,
  FaGhost,
  FaGlobe,
  FaGraduationCap,
  FaDumbbell,
  FaFootballBall,
  FaMap,
  FaFeatherAlt,
  FaCube,
  FaRobot,
  FaClock,
  FaCrown,
  FaStar,
  FaQuestion,
  FaKeyboard,
  FaLayerGroup,
  FaAtom,
  FaRocket,
  FaMountain,
} from "react-icons/fa";
import useGameCategories from "../../../Hooks/useGameCategory";
import { useNavigate } from "react-router";

const CategoryList = () => {
  const { data: categories, isLoading } = useGameCategories();
  const navigate = useNavigate();

  const categoryIcons = {
    Action: <FaGun color="#E63946" />,
    Adventure: <FaMap color="#457B9D" />,
    Arcade: <FaGamepad color="#F77F00" />,
    Board: <FaChess color="#FF6B6B" />,
    Card: <FaDice color="#FFD166" />,
    Casual: <FaSmile color="#06D6A0" />,
    Educational: <FaGraduationCap color="#118AB2" />,
    Fighting: <FaDumbbell color="#EF476F" />,
    Puzzle: <FaPuzzlePiece color="#FFB703" />,
    Racing: <FaCar color="#219EBC" />,
    "Role-Playing": <FaHatWizard color="#9B5DE5" />,
    Shooting: <FaGun color="#F72585" />,
    Simulation: <FaCubes color="#4361EE" />,
    Sports: <FaFootballBall color="#4ECDC4" />,
    Strategy: <FaChess color="#FFD93D" />,
    Survival: <FaHeartbeat color="#E63946" />,
    Multiplayer: <FaUsers color="#1A535C" />,
    Music: <FaMusic color="#F9844A" />,
    Platformer: <FaLayerGroup color="#8338EC" />,
    Trivia: <FaQuestion color="#F15BB5" />,
    Word: <FaKeyboard color="#00BBF9" />,
    Memory: <FaBrain color="#3A86FF" />,
    Physics: <FaAtom color="#FF006E" />,
    Idle: <FaClock color="#8338EC" />,
    "Battle Royale": <FaCrown color="#FFD700" />,
    Sandbox: <FaCube color="#6A4C93" />,
    Horror: <FaGhost color="#8D99AE" />,
    Fantasy: <FaDragon color="#FFB703" />,
    "Science Fiction": <FaRocket color="#06D6A0" />,
    "3D": <FaCube color="#118AB2" />,
    Historical: <FaBook color="#9C6644" />,
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
          onClick={() => {
            navigate(`/category/${cat}`), scrollTo(0, 0);
          }}
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
