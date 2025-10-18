import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import Loader from "../../../Shared/Loader/Loader";

const CategoryGames = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Fetch games by category
  const {
    data: games = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["gamesByCategory", category],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:5000/games/category/${category}`
      );
      return data.games || [];
    },
  });

  // Loader
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[80vh] bg-black">
        <Loader />
      </div>
    );

  // Error message
  if (isError)
    return (
      <p className="text-center text-red-500 bg-black mt-8">
        ❌ Error fetching games!
      </p>
    );

  // No games found
  if (games.length === 0)
    return (
      <div className="text-center bg-black min-h-screen flex justify-center flex-col items-center">
        <h2 className="text-2xl font-semibold text-gray-300">
          No games found in "{category}" category 🎮
        </h2>
        <p className="text-gray-500 mt-2">Try exploring other categories!</p>
      </div>
    );

  return (
    <div className="p-6 bg-[#0a0a0a] min-h-screen">
      <h2 className="text-2xl font-semibold mb-8 text-center text-white">
        Category: <span className="text-red-500">{category}</span>
      </h2>

      {/* Game Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {games.map((game) => (
          <div
            key={game._id}
            onClick={() => navigate(`/games/${game._id}`)}
            className="relative group cursor-pointer overflow-hidden hover:scale-105 rounded-xl shadow-md hover:shadow-lg transition-all duration-600 bg-[#111] aspect-square"
          >
            {/* Game Image */}
            <img
              src={game.thumbnail}
              alt={game.title}
              className="w-full h-full object-cover bg-white rounded-xl shadow-md transition duration-500"
            />

            {/* Smooth hover title reveal (slide from bottom) */}
            <div
              className="absolute bottom-0 left-0 w-full bg-black/60 py-3
                         translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
            >
              <h3 className="text-white text-center text-sm sm:text-base font-semibold tracking-wide">
                {game.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGames;
