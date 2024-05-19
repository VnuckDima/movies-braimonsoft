import axiosInstance from "./axiosInstance";

const apiKey = import.meta.env.VITE_API_KEY || "";

const getMovies = async (search, page) => {
  try {
    const response = await axiosInstance.get(
      `/?i=tt3896198&apikey=${apiKey}&s=${search}&page=${page}`
    );
    return response.data;
  } catch (error) {
    throw new Error("FAILED_TO_FETCH_MOVIES");
  }
};

export default getMovies;
