import { FaSearch } from "react-icons/fa";
import logo from "../../../assets/logo2.png";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = ({ setResult, setLoading }) => {
  const [query, setQuery] = useState("");
  console.log(query);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.trim() !== "") {
        fetchGames(query);
      } else {
        setResult([]);
      }
    }, 400);

    return () => clearTimeout(delay);
  }, [query]);

  const fetchGames = async (title) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:5000/search?title=${title}`
      );
      console.log(res.data);
      setResult(res.data);
      console.log(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-white px-4 rounded-2xl">
        <img src={logo} alt="second logo" />
        <input
          type="text"
          placeholder="What are you playing today?"
          onChange={(e) => setQuery(e.target.value)}
          className="bg-white w-full text-xl border-none text-[#002b50] placeholder-[#bac9de] font-bold outline-none rounded-2xl px-6 py-4"
        />
        <FaSearch className="w-7 h-7 text-[#bac9de]" />
      </div>
    </div>
  );
};

export default SearchBar;
