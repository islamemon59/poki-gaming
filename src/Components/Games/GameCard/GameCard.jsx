import { Link } from "react-router";

const GameCard = ({ game, setHovered, hovered, index }) => {
  return (
    <div className="">
      <Link
        key={index}
        to={`/games/${game._id}`}
        className="relative group rounded-xl overflow-hidden shadow-lg block"
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Thumbnail */}
        <img
          src={game?.thumbnail}
          alt={game?.title}
          className={`w-full object-cover transition duration-300`}
        />

        {/* Game Title with animation */}
        <div
          className={`absolute text-xs bottom-1 left-0 w-full font-bold bg-opacity-60 text-white text-center transform transition-transform duration-500
          ${hovered === index ? "translate-y-0" : "translate-y-full"}`}
        >
          {game?.title}
        </div>
      </Link>
    </div>
  );
};

export default GameCard;
