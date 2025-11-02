import React, { useEffect, useRef } from "react";

const RenderAdCode = ({ code }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = code;

      // Execute scripts inside the ad code
      const scripts = containerRef.current.querySelectorAll("script");
      scripts.forEach((oldScript) => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        newScript.async = true;
        oldScript.parentNode.replaceChild(newScript, oldScript);
      });
    }
  }, [code]);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default RenderAdCode;
