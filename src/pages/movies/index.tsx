import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

const API_KEY = "b24d7228fde6a3df7492643b6cd889c9";
const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Movies App | Top Rated Movies</title>
      </Head>


      <div className="min-h-screen bg-gray-800 text-white">
      <Navbar />
      <div className="p-6 md:p-12 mt-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#FF0037]">Top Rated Movies</h1>

        {loading ? (
          <p className="text-center text-gray-300">Loading...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">


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
        )}
      </div>
      <Footer />
    </div>
    </>

  );
}


