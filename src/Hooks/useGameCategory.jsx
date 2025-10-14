import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGameCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/categories");
      return data?.categories || [];
    },
  });
};

export default useGameCategories;
