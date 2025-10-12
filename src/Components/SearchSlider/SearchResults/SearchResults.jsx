import { Link } from "react-router";

const SearchResults = ({ result, loading }) => {
  if (loading)
    return <p className="text-center text-gray-600 font-semibold">Searching...</p>;

  if (!result || result.length === 0)
    return <p className="text-center text-gray-500">No games found</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
      {result.map((game) => (
        <Link
          key={game._id}
          to={`/games/${game._id}`}
          className="bg-white rounded-xl overflow-hidden shadow hover:scale-105 hover:shadow-xl transition-transform duration-300"
        >
          <img
            src={game.thumbnail}
            alt={game.title}
            className="w-full aspect-square object-cover"
          />
          <h3 className="text-sm font-semibold text-center p-2 text-gray-700">
            {game.title}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
