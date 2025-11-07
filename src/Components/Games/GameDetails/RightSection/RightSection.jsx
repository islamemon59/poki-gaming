import React from "react";
import RenderAdCode from "../../RenderAdCode/RenderAdCode";

const RightSection = ({ rightAds }) => {
  return (
    <div>
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
  );
};

export default RightSection;
