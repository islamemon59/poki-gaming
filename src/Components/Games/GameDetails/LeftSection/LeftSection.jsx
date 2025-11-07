import React from "react";

const LeftSection = ({leftAds}) => {
  return (
    <div>
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
    </div>
  );
};

export default LeftSection;
