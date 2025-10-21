import { useEffect } from "react";

const useDynamicTitle = (title) => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = title ? `Innliv | ${title}` : "Innliv";
    
    return () => {
      document.title = originalTitle; 
    };
  }, [title]);
};

export default useDynamicTitle;
