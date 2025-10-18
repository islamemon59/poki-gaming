import { Link } from "react-router";

const GameCard = ({ game, setHovered, hovered, index, featured }) => {
  return (
    <div
      className={`relative group rounded-xl overflow-hidden shadow-lg block hover:scale-105 transition-transform duration-600 ${
        featured ? "h-80 sm:h-96 lg:h-[450px]" : "aspect-square"
      }`}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      <Link to={`/games/${game._id}`} className="block w-full h-full">
        {/* Thumbnail */}
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover bg-white rounded-xl shadow-md transition duration-500"
        />

        {/* Optional Featured Badge */}
        {featured && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            Featured
          </span>
        )}

        {/* Game Title with Animation */}
        <div
          className={`absolute bottom-0 left-0 w-full text-sm font-bold bg-black/60 text-white text-center p-2 transform transition-transform duration-500 ${
            hovered === index ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {game?.title}
        </div>
      </Link>
    </div>
  );
};

export default GameCard;
