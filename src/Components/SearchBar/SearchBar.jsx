import { FaSearch } from "react-icons/fa";
import logo from "../../assets/logo2.png"

const SearchBar = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-white px-4 rounded-2xl">
        <img src={logo} alt="second logo" />
        <input
          type="text"
          placeholder="What are you playing today?"
          className="bg-white w-full text-xl border-none text-[#002b50] placeholder-[#bac9de] font-bold outline-none rounded-2xl px-6 py-4"
        />
        <FaSearch className="w-7 h-7 text-[#bac9de]" />
      </div>
    </div>
  );
};

export default SearchBar;
