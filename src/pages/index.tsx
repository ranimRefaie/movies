import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Head from "next/head";

const API_KEY = "b24d7228fde6a3df7492643b6cd889c9";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    if (searchQuery === "") return;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };
  const handleFilter = (genre: string) => {
    setGenreFilter(genre);
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
   <>
     <Head>
        <title>Movies App</title>
      </Head>
   <div className="min-h-screen bg-gray-800 text-white">
      <Navbar />
      <section className="p-6 md:p-12 mt-16">
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="flex justify-between md:w-1/3">
            <input
              type="text"
              placeholder="Search for a movie"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 rounded bg-gray-700 text-white w-full outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-[#FF0000DE] text-white p-2 rounded ml-2 hover:bg-[#FF0037] cursor-pointer"
            >
              Search
            </button>
          </div>

          {/* Filter by Genre */}
          <select
            onChange={(e) => handleFilter(e.target.value)}
            className="p-3 bg-gray-700 text-white rounded mt-4 md:mt-0 outline-none cursor-pointer"
          >
            <option value="">Select Genre</option>
            <option value="28">Action</option>
            <option value="35">Comedy</option>
            <option value="18">Drama</option>
            <option value="27">Horror</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {movies.map((movie: any) => (
            <div key={movie.id} className="bg-white text-black rounded-xl shadow-lg p-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded w-full"
              />
              <h3 className="mt-2 font-semibold">{movie.title}</h3>
              <a
                href={`https://www.themoviedb.org/movie/${movie.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on TMDB
              </a>

              <Link href={`/movie/${movie.id}`}>
                <button className="mt-3 w-full bg-gray-800  text-white py-1 rounded hover:bg-gray-900 cursor-pointer  transition-colors">
                  Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
   </>
  );
}