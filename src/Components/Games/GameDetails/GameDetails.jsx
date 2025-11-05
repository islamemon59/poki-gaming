import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router";
import Loader from "../../../Shared/Loader/Loader";
import useDynamicTitle from "../../../Hooks/useDynamicTitle";
import logo from "../../../assets/logo.png";
import CategoryList from "../CategoryList/CategoryList";
import { Helmet } from "react-helmet-async";
import RenderAdCode from "../RenderAdCode/RenderAdCode";

const GameDetails = () => {
  const { id } = useParams();
  const [hovered, setHovered] = useState(null);

  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleMouseEnter = () => {
      // Disable scrolling on the whole page when hovering iframe
      document.body.style.overflow = "hidden";
    };
    iframe.contentWindow.document.body.style.overflow = "hidden";

    const handleMouseLeave = () => {
      // Re-enable scrolling
      document.body.style.overflow = "";
    };

    iframe.addEventListener("mouseenter", handleMouseEnter);
    iframe.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      iframe.removeEventListener("mouseenter", handleMouseEnter);
      iframe.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Fetch all games
  const { data: games } = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      const { data } = await axios.get("https://server.innliv.com/games");
      return data;
    },
  });

  const { data: game, isLoading } = useQuery({
    queryKey: ["game", id],
    enabled: !!id, // 👈 Only fetch when id exists
    queryFn: async () => {
      const { data } = await axios.get(`https://server.innliv.com/games/${id}`);
      return data;
    },
  });

  // Fetch ads
  const { data: ads } = useQuery({
    queryKey: ["ads"],
    queryFn: async () => {
      const { data } = await axios.get("https://server.innliv.com/ads");
      return data?.ads || [];
    },
  });

  useDynamicTitle(`${game?.title || "title"}`);

  const otherGames = games?.filter((g) => g?._id !== id);

  if (isLoading) return <Loader />;

  if (!game)
    return <h2 className="text-center text-red-500">Game not found!</h2>;

  const isValidUrl = (url) =>
    url && (url.startsWith("http://") || url.startsWith("https://"));

  // Separate ads by position
  // Separate ads by position
  const leftAds = ads?.filter((ad) => ad.position === "left") || [];
  const rightAds = ads?.filter((ad) => ad.position === "right") || [];
  const bottomAds = ads?.filter((ad) => ad.position === "bottom") || [];
  console.log(rightAds[0]);

  return (
    <div className="relative flex flex-col items-center bg-black min-h-screen p-4 lg:pt-0">
      {game && (
        <Helmet>
          <title>{`${game.metaTitle || game.title} | Innliv Gaming`}</title>
          <meta
            name="description"
            content={
              game.metaDescription ||
              game.description ||
              "Play exciting games on Innliv Gaming."
            }
          />
          <meta
            name="keywords"
            content={game.metaKeywords || "games, online, play"}
          />
          <meta property="og:title" content={game.metaTitle || game.title} />
          <meta
            property="og:description"
            content={game.metaDescription || game.description}
          />
          <meta property="og:image" content={game.thumbnail} />
          <meta property="og:url" content={window.location.href} />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
      )}
      {/* === Layout Wrapper === */}
      <div className="flex flex-col lg:flex-row w-full gap-4">
        {/* === Left Ad (Desktop Only) === */}
        <div className="hidden lg:flex flex-col gap-6 sticky top-24 self-start">
          {leftAds.length > 0 ? (
            leftAds.map((ad) =>
              ad.type === "image" ? (
                <a
                  key={ad._id}
                  href={ad.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[160px] h-[600px] overflow-hidden shadow-lg"
                >
                  <img
                    src={ad.image}
                    alt={ad.title}
                    className="w-full h-full object-cover"
                  />
                </a>
              ) : (
                <div
                  key={ad._id}
                  className="w-[160px] h-[600px] overflow-hidden shadow-lg"
                >
                  <RenderAdCode code={ad.content} />
                </div>
              )
            )
          ) : (
            <div className="w-[160px] h-[600px] flex justify-center items-center text-gray-600 text-sm italic bg-black">
              No ads available
            </div>
          )}
          <p className="text-center text-xs text-gray-500 mt-1 italic">
            Advertisement
          </p>
        </div>

        {/* === Header / Logo === */}
        <div className="fixed z-50 top-2 left-3 lg:left-6">
          <Link to="/" className="block">
            <img
              src={logo}
              alt="Logo"
              className="w-20 lg:w-32 hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* === Main Content === */}
        <div className="flex-1">
          {/* === Game Frame === */}
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

          {/* === Bottom Ads === */}
          <div className="flex flex-col justify-center items-center mb-4 px-2">
            {bottomAds.length > 0 ? (
              bottomAds.map((ad) =>
                ad.type === "image" ? (
                  <a
                    key={ad._id}
                    href={ad.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[320px] h-[50px] sm:w-[468px] sm:h-[60px] md:w-[728px] md:h-[90px] overflow-hidden shadow-lg mb-2"
                  >
                    <img
                      src={ad.image}
                      alt={ad.title}
                      className="w-full h-full object-cover"
                    />
                  </a>
                ) : (
                  <div
                    key={ad._id}
                    className="w-[320px] h-[50px] sm:w-[468px] sm:h-[60px] md:w-[728px] md:h-[90px] overflow-hidden shadow-lg mb-2"
                  >
                    <RenderAdCode code={ad.content} />
                  </div>
                )
              )
            ) : (
              <div className="w-full flex justify-center items-center text-gray-600 text-sm italic">
                No ads available
              </div>
            )}
            <p className="text-center text-xs text-gray-500 mt-1 italic">
              Advertisement
            </p>
          </div>

          {/* === Game Description === */}
          <div className="mt-10 bg-gray-900 rounded-xl p-6 shadow-lg border border-red-700/30 text-white mx-auto mb-4">
            {/* Top row: Title & Category on left, Thumbnail on right */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              {/* Left: Title & Category */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{game?.title}</h3>
                {game?.category && (
                  <p className="text-sm font-semibold text-red-500">
                    Category:{" "}
                    <span className="text-white">{game.category}</span>
                  </p>
                )}
              </div>

              {/* Right: Thumbnail */}
              {game?.thumbnail && (
                <div className="md:w-64 flex-shrink-0">
                  <img
                    src={game.thumbnail}
                    alt={game.title}
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
                  dangerouslySetInnerHTML={{ __html: game.description }}
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

          {/* === Recommended Games === */}
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white text-center">
            Other Games
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {otherGames?.map((g) => (
              <Link
                key={g?._id}
                to={`/games/${g?._id}`}
                onClick={() => scrollTo(0, 0)}
                className="rounded-xl overflow-hidden shadow-md relative group aspect-square"
                onMouseEnter={() => setHovered(g?._id)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={g?.thumbnail}
                  alt={g?.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute bottom-0 left-0 w-full font-bold text-xs sm:text-sm bg-black/60 p-2 text-white text-center transform transition-transform duration-500 ${
                    hovered === g?._id ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  {g?.title}
                </div>
              </Link>
            ))}
          </div>

          {/* === Category List === */}
          <div className="mt-8">
            <CategoryList />
          </div>
        </div>

        {/* === Right Sidebar Ads (Desktop Only) === */}
        <div className="hidden lg:flex flex-col gap-6 sticky top-6 self-start">
          {/* === First Ad Block === */}
          <div className="w-[300px] h-[250px]">
            {rightAds[0] ? (
              rightAds[0]?.type === "image" ? (
                <a
                  href={rightAds[0]?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[300px] h-[250px] overflow-hidden shadow-lg"
                >
                  <img
                    src={rightAds[0]?.image}
                    alt={rightAds[0]?.title}
                    className="w-full h-full object-cover"
                  />
                </a>
              ) : (
                <div className="w-[300px] h-[250px] overflow-hidden shadow-lg">
                  <RenderAdCode code={rightAds[0]?.content} />
                </div>
              )
            ) : (
              <div className="w-[300px] h-[250px] flex justify-center items-center text-gray-600 text-sm italic bg-black">
                No ads available
              </div>
            )}
            <p className="text-center text-xs font-xs text-gray-500 mt-0 italic">
              Sponsored
            </p>
          </div>

          {/* === Second Ad Block === */}
          <div className="w-[300px] h-[250px]">
            {rightAds[1] ? (
              rightAds[1]?.type === "image" ? (
                <a
                  href={rightAds[1]?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[300px] h-[250px] overflow-hidden shadow-lg"
                >
                  <img
                    src={rightAds[1]?.image}
                    alt={rightAds[1]?.title}
                    className="w-full h-full object-cover"
                  />
                </a>
              ) : (
                <div className="w-[300px] h-[250px] overflow-hidden shadow-lg">
                  <RenderAdCode code={rightAds[1]?.content} />
                </div>
              )
            ) : (
              <div className="w-[300px] h-[250px] flex justify-center items-center text-gray-600 text-sm italic bg-black">
                No ads available
              </div>
            )}
            <p className="text-center text-xs text-gray-500 mt-1 italic">
              Advertisement
            </p>
          </div>

          {/* === Third Ad Block (Only on 2xl screens) === */}
          <div className="hidden 2xl:block w-[300px] h-[250px]">
            {rightAds[2] ? (
              rightAds[2]?.type === "image" ? (
                <a
                  href={rightAds[2]?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[300px] h-[250px] overflow-hidden shadow-lg"
                >
                  <img
                    src={rightAds[2]?.image}
                    alt={rightAds[2]?.title}
                    className="w-full h-full object-cover"
                  />
                </a>
              ) : (
                <div className="w-[300px] h-[250px] overflow-hidden shadow-lg">
                  <RenderAdCode code={rightAds[2]?.content} />
                </div>
              )
            ) : (
              <div className="w-[300px] h-[250px] flex justify-center items-center text-gray-600 text-sm italic bg-black">
                No ads available
              </div>
            )}
            <p className="text-center text-xs text-gray-500 mt-1 italic">
              Advertisement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
