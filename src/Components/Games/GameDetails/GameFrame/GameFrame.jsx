import React from "react";

const GameFrame = ({isValidUrl, game, iframeRef}) => {
  return (
    <div>
      <div className="mt-6 mb-3 aspect-video overflow-hidden shadow-2xl border border-red-700/30">
        {isValidUrl(game?.gameUrl) ? (
          <iframe
            src={game?.gameUrl}
            title={game?.title}
            scrolling="no"
            ref={iframeRef}
            className="w-full h-full border-0 select-none pointer-events-auto"
            style={{
              overflow: "hidden",
              overscrollBehavior: "none",
              touchAction: "none", // disable touch scroll inside iframe
            }}
            sandbox="allow-scripts allow-same-origin allow-fullscreen"
          ></iframe>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900 text-gray-300">
            <p className="text-lg font-semibold mb-3 text-center">
              ⚠️ Invalid game URL — cannot display game
            </p>
            {game?.thumbnail && (
              <img
                src={game?.thumbnail}
                alt={game?.title}
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-md"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GameFrame;
