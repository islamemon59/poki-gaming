import React from "react";

const GameDescription = ({ game }) => {
  return (
    <div>
      {/* === Game Description === */}
      <div className="mt-10 bg-gray-900 rounded-xl p-6 shadow-lg border border-red-700/30 text-white mx-auto mb-4">
        {/* Top row: Title & Category on left, Thumbnail on right */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          {/* Left: Title & Category */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">{game?.title}</h3>
            {game?.category && (
              <p className="text-sm font-semibold text-red-500">
                Category: <span className="text-white">{game?.category}</span>
              </p>
            )}
          </div>

          {/* Right: Thumbnail */}
          {game?.thumbnail && (
            <div className="md:w-64 flex-shrink-0">
              <img
                src={game?.thumbnail}
                alt={game?.title}
                className="w-full h-48 md:h-56 object-cover rounded-lg shadow-md"
              />
            </div>
          )}
        </div>

        {/* Bottom row: Full-width description */}
        <div className="mt-6">
          {game?.description ? (
            <div
              className="prose max-w-full"
              dangerouslySetInnerHTML={{ __html: game?.description }}
            ></div>
          ) : (
            <p className="text-gray-500 text-sm italic">
              No description available.
            </p>
          )}
        </div>

        {/* --- Static Article Section (Slightly Different Look) --- */}
        {/* <div className="mt-8 pt-4 border-t border-red-700/50">
              <div className="bg-gray-800 rounded-lg p-4 text-sm shadow-inner border border-gray-700">
                <h4 className="text-lg font-semibold mb-2 text-red-400">
                  Source Information
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  **All games on this site come from third-party developers.**
                  We don’t own the games; we simply embed them for you to enjoy.
                  Some games may include ads, and we may earn revenue from these
                  ads.
                </p>
              </div>
            </div> */}
      </div>
    </div>
  );
};

export default GameDescription;
