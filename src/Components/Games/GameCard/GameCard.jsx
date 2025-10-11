import { Link } from "react-router";

const GameCard = ({ game, setHovered, hovered, index }) => {
  return (
    <div className="hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
      <Link
        key={index}
        to={`/games/${game._id}`}
        className="relative group rounded-xl overflow-hidden shadow-lg block"
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Thumbnail */}

        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover bg-white rounded-xl shadow-md hover:shadow-lg transition duration-600 overflow-hidden aspect-square cursor-pointer"
        />

        {/* Game Title with animation */}
        <div
          className={`absolute bottom-0 left-0 w-full text-sm font-bold bg-black/60 text-white text-center p-2 transform transition-transform duration-500
      ${hovered === index ? "translate-y-0" : "translate-y-full"}`}
        >
          {game?.title}
        </div>
      </Link>
    </div>
  );
};

export default GameCard;
