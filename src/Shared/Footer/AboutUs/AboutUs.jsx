import React from "react";
import { Link } from "react-router";
import logo from "../../../assets/logo.png"
import useDynamicTitle from "../../../Hooks/useDynamicTitle";

const AboutUs = () => {
  useDynamicTitle("About Us");
  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-b from-black via-[#111] to-[#1a1a1a] text-white relative overflow-hidden">
      {/* Floating background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,0,0.15),transparent_50%)]"></div>

      {/* Header + Logo */}
      <div className="max-w-6xl mx-auto mb-10 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-red-600 hover:text-white transition duration-300"
        >
          <img className="w-34" src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Main Content */}
      <main className="relative z-10 px-6 lg:px-20 py-10 lg:py-20 max-w-6xl mx-auto">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-center mb-12 tracking-tight">
          About <span className="text-red-500">Us</span>
        </h1>

        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-2xl space-y-8">
          <p className="text-gray-200 text-lg leading-relaxed">
            <span className="font-semibold text-red-500">innliv.com</span> began
            its journey in 2025 with a passionate team of dreamers who believed
            that gaming could be more than entertainment — a way to connect
            people globally through shared fun and imagination.
          </p>

          <p className="text-gray-200 text-lg leading-relaxed">
            We started as gamers, not a big studio. Our goal was simple: create
            the kind of games we’d love to play. That curiosity and ambition
            still drive us — turning every line of code into an experience that
            sparks joy.
          </p>

          <p className="text-gray-200 text-lg leading-relaxed">
            Our philosophy is{" "}
            <span className="font-semibold text-red-500">player-first</span>.
            Every update, every idea, and every challenge we take on starts with
            our players. Their passion shapes{" "}
            <span className="font-semibold text-red-500">innliv.com</span>,
            making it more than just a platform — it’s a community.
          </p>

          <p className="text-gray-200 text-lg leading-relaxed">
            We’re bold, creative, and sometimes a little rebellious. Every
            event, release, and story is built with heart. At{" "}
            <span className="font-semibold text-red-500">innliv.com</span>, we
            don’t just make games — we make them breathe.
          </p>

          <div className="flex justify-center mt-12">
            <Link
              to="/"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full shadow-lg transition-all"
            >
              Explore Our Games
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
