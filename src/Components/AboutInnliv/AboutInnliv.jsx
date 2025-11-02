import React from "react";

const AboutInnLiv = () => {
  const sections = [
    {
      title: "Play Free Online Games Anytime",
      gradient: "from-red-500 via-pink-500 to-orange-500",
      icon: "🎮",
      text: `Play free online games anytime at InnLiv. At InnLiv we believe that you don’t have to waste time and money by downloading games to play them. Day by day browsers are becoming more powerful and they can support exciting games that you can play online for free. At InnLiv you will find a wide variety of online games starting from fun and relaxing arcade games to serious FPS games all free of charge! There is absolutely no payment necessary to play these amazing games nor do you need to download them. With a stable internet connection, you can access countless games anytime, anywhere. InnLiv makes it easy for players to enjoy endless entertainment with its free online games, whether for quick breaks or long gaming sessions, all without the hassle of installations or payments.`,
    },
    {
      title: "Your Ultimate Destination for Free and Fun Online Games",
      gradient: "from-blue-500 via-cyan-500 to-green-500",
      icon: "🚀",
      text: `InnLiv is your ultimate destination for free and fun online games designed to entertain players of all ages. At InnLiv we offer a wide variety of unique games. Best of all, every game on our platform is totally free, no hidden charges, subscriptions, or downloads required. A lot of gaming websites will tell you that they offer free online games but, when you try to play them, you may find out that they are making sneaky ways to make you pay for their games. That’s not how we do things at InnLiv. InnLiv believes in honest, unrestricted access to entertainment. Simply visit the site, choose your favourite title, and start playing immediately.`,
    },
    {
      title: "Play the Coolest HTML5 Games Online",
      gradient: "from-orange-400 via-yellow-500 to-red-500",
      icon: "🌐",
      text: `Play the coolest HTML5 games online and experience fun, speed, and excitement like never before! HTML5 games are changing the way people enjoy gaming, they run directly in your web browser with no need for downloads, apps, or plugins. Whether you are on a smartphone, tablet, or desktop, you can jump into your favorite game instantly. At InnLiv, these games are not only free but also deliver smooth performance, stunning graphics, and immersive sound. One of the best things about HTML5 games is their cross-platform compatibility. Start a game on your laptop and continue on your phone without missing a beat. From puzzles and adventures to racing and strategy games, there’s something for every player. Playing HTML5 games online means endless entertainment that’s accessible, fast, and effortless. Just open your browser, choose a game you love, and start playing the coolest HTML5 games online today!`,
    },
    {
      title: "Enjoy Endless Gaming Adventures at InnLiv",
      gradient: "from-purple-500 via-pink-600 to-red-500",
      icon: "✨",
      text: `Enjoy Endless Gaming Adventures at InnLiv, the ultimate hub for free online gaming where fun never stops! At InnLiv, you can dive into a massive world of exciting HTML5 games that load quickly on any device, no downloads, no sign-ups, and absolutely no hidden fees. Whether you love fast-paced racing games, strategic puzzles, or relaxing arcade adventures, InnLiv has something for everyone. Powered by advanced browser technology, our games deliver smooth performance, vibrant graphics, and immersive sound effects that will keep you hooked. You can play anytime, anywhere. InnLiv redefines online entertainment by giving players limitless access to free, high-quality games that work seamlessly across all platforms. So why wait? Enjoy Endless Gaming Adventures at InnLiv today and experience the most exciting world of browser-based gaming online.`,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-6 sm:px-10 lg:px-24 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-500 mb-4">
          About InnLiv
        </h2>
        <p className="text-gray-300 text-lg">
          Discover the world of free gaming — no downloads, no limits, just pure fun!
        </p>
      </div>

      <div className="space-y-16">
        {sections.map((sec, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""} items-center gap-10`}
          >
            {/* Text Section */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-red-400 mb-4">{sec.title}</h3>
              <p className="text-gray-300 leading-relaxed text-justify">{sec.text}</p>
            </div>

            {/* Visual Section */}
            <div className="lg:w-1/2 flex justify-center">
              <div
                className={`relative w-full max-w-sm h-64 rounded-2xl p-4 shadow-xl border border-gray-700 overflow-hidden 
                            flex items-center justify-center transform hover:scale-105 transition-transform duration-300 ease-in-out group`}
              >
                {/* Dynamic Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${sec.gradient} opacity-80 rounded-2xl
                              group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Pulsing Border */}
                <div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent 
                              bg-gradient-to-br ${sec.gradient} animate-pulse-border`}
                  style={{
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                  }}
                ></div>

                {/* Central Icon + Gaming Glow */}
                <div className="relative flex items-center justify-center">
                  <div className="icon-bg-animate"></div>
                  <div className="relative z-10 text-7xl md:text-8xl text-white icon-animate-gaming">
                    {sec.icon}
                  </div>
                </div>

                {/* Floating Abstract Shapes */}
                <div className="absolute top-0 -left-10 w-24 h-24 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float-slow"></div>
                <div className="absolute bottom-0 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 animate-float-slow-alt"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutInnLiv;
