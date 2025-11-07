import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const SearchBar = () => {
  const [title, setTitle] = useState("");
  const { result, setResult } = useAuth(); // ✅ using global result
  const [originalGames, setOriginalGames] = useState([]);

  // 🧠 Save the original game list once (so we can restore it later)
  useEffect(() => {
    if (result?.length > 0 && originalGames.length === 0) {
      setOriginalGames(result);
    }
  }, [result, originalGames]);

  useEffect(() => {
    if (!originalGames.length) return;

    // 🧹 If input is empty, restore full list
    if (!title.trim()) {
      setResult(originalGames);
      return;
    }

    // ⏳ Debounce search for smoother typing
    const delay = setTimeout(() => {
      const filtered = originalGames.filter((game) =>
        game.title.toLowerCase().includes(title.toLowerCase())
      );
      setResult(filtered);
    }, 300);

    return () => clearTimeout(delay);
  }, [title, originalGames, setResult]);

  return (
    <div className="flex justify-between items-center bg-white px-4 rounded-2xl shadow-md">
      <input
        type="text"
        placeholder="What are you playing today?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-white w-full text-xl border-none text-[#002b50] placeholder-[#bac9de] font-bold outline-none rounded-2xl px-6 py-4"
      />
      <FaSearch className="w-7 h-7 text-[#bac9de]" />
    </div>
  );
};

export default SearchBar;
