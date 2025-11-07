import React from "react";
import RenderAdCode from "../../RenderAdCode/RenderAdCode";

const BottomSection = ({ bottomAds }) => {
    console.log(bottomAds);
  return (
    <div>
      {/* === Bottom Ads === */}
      <div className="flex flex-col justify-center items-center mb-4 px-2">
        {bottomAds.length > 0 ? (
          bottomAds?.map((ad) =>
            ad.type === "image" ? (
              <a
                key={ad?._id}
                href={ad?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[320px] h-[50px] sm:w-[468px] sm:h-[60px] md:w-[728px] md:h-[90px] overflow-hidden shadow-lg mb-2"
              >
                <img
                  src={ad?.image}
                  alt={ad?.title}
                  className="w-full h-full object-cover"
                />
              </a>
            ) : (
              <div
                key={ad?._id}
                className="w-[320px] h-[50px] sm:w-[468px] sm:h-[60px] md:w-[728px] md:h-[90px] overflow-hidden shadow-lg mb-2"
              >
                <RenderAdCode code={ad?.content} />
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
    </div>
  );
};

export default BottomSection;
