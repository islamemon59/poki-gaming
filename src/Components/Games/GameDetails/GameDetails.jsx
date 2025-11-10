import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router";
import Loader from "../../../Shared/Loader/Loader";
import useDynamicTitle from "../../../Hooks/useDynamicTitle";
import logo from "../../../assets/logo.png";
import CategoryList from "../CategoryList/CategoryList";
import { Helmet } from "react-helmet-async";
import GameDescription from "./GameDescription/GameDescription";
import OthersGames from "./OthersGames/OthersGames";
import GameFrame from "./GameFrame/GameFrame";
import BottomSection from "./BottomSection/BottomSection";
import RightSection from "./RightSection/RightSection";
import LeftSection from "./LeftSection/LeftSection";

const GameDetails = () => {
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

  const { slug } = useParams();
  const location = useLocation();
  const id = location.state?.id; // 👈 get id secretly from navigation state
  const { data: game, isLoading } = useQuery({
    queryKey: ["game", id],
    enabled: !!id, // 👈 Only fetch when id exists
    queryFn: async () => {
      const { data } = await axios.post(`https://server.innliv.com/${slug}`, {
        id,
      });
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
  const leftAds = ads?.filter((ad) => ad.position === "left") || [];
  const rightAds = ads?.filter((ad) => ad.position === "right") || [];
  const bottomAds = ads?.filter((ad) => ad.position === "bottom") || [];

  return (
    <div className="relative flex flex-col items-center bg-black min-h-screen p-4 lg:pt-0">
      {game && (
        <Helmet>
          <title>{`${
            game.metaTitle || game.title
          } - Play Online Games For Free`}</title>
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
        <LeftSection leftAds={leftAds} />

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
          <GameFrame
            game={game}
            isValidUrl={isValidUrl}
            iframeRef={iframeRef}
          />

          {/* Bottom Ads */}
          <BottomSection bottomAds={bottomAds} />
          {/* Game Description */}
          <GameDescription game={game} />

          {/* === Recommended Games === */}
          <OthersGames
            otherGames={otherGames}
            hovered={hovered}
            setHovered={setHovered}
          />

          {/* === Category List === */}
          <div className="mt-8">
            <CategoryList />
          </div>
        </div>

        {/* === Right Sidebar Ads (Desktop Only) === */}
        <RightSection rightAds={rightAds} />
      </div>
    </div>
  );
};

export default GameDetails;
