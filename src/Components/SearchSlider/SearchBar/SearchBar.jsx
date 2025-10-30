import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";

const SearchBar = () => {
  const [title, setTitle] = useState("");
  const { setResult, setIsLoading } = useAuth();

  useEffect(() => {
    // debounce logic
    const delay = setTimeout(async () => {
      try {
        setIsLoading(true);

        const { data } = await axios.get(
          `https://server.innliv.com/search/games${title ? `?title=${title}` : ""}`
        );

        setResult(data);
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setIsLoading(false);
      }
    }, 500); // 500ms debounce delay

    // cleanup when typing continues
    return () => clearTimeout(delay);
  }, [title, setResult, setIsLoading]);

  return (
    <div>
      <div className="flex justify-between items-center bg-white px-4 rounded-2xl">
        <input
          type="text"
          placeholder="What are you playing today?"
          onChange={(e) => setTitle(e.target.value)}
          className="bg-white w-full text-xl border-none text-[#002b50] placeholder-[#bac9de] font-bold outline-none rounded-2xl px-6 py-4"
        />
        <FaSearch className="w-7 h-7 text-[#bac9de]" />
      </div>
    </div>
  );
};

export default SearchBar;
