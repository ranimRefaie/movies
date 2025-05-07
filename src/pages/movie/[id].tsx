import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Head from "next/head";

const API_KEY = "b24d7228fde6a3df7492643b6cd889c9";



export default function MovieDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [movie, setMovie] = useState<any>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (id) {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
          .then((res) => res.json())
          .then((data) => {
            setMovie(data);
            setLoading(false);
          });
      }
    }, [id]);
  
    if (loading) {
      return <p className="text-center text-white">Loading...</p>;
    }
  
    return (

      <>
        <Head>
        <title>Movies App | {movie.title}</title>
      </Head>


      <div className="min-h-screen flex flex-col bg-gray-800 text-white">
        <Navbar />
  
        <section className="p-6 md:p-12 mt-16">
          <div className="flex flex-col  md:flex-row gap-12">
            {/* صورة الفيلم */}
            <div className="w-full md:w-1/4">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={350}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
  
            {/* تفاصيل الفيلم في جدول */}
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
              <p className="text-lg text-gray-300 mb-6">{movie.overview}</p>
  
              <table className="min-w-full border-collapse text-sm text-gray-300">
                <tbody>
                  <tr>
                    <td className="py-2 px-4 font-semibold">Release Date:</td>
                    <td className="py-2 px-4">{movie.release_date}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-semibold">Rating:</td>
                    <td className="py-2 px-4">{movie.vote_average} / 10</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-semibold">Language:</td>
                    <td className="py-2 px-4">{movie.original_language.toUpperCase()}</td>
                  </tr>

                  <tr>
                    <td className="py-2 px-4 font-semibold">Link:</td>
                    <td className="py-2 px-4"><a
  href={`https://www.themoviedb.org/movie/${movie.id}`}
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-500 hover:underline"
>
  View on TMDB
</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
  
        <Footer />
      </div>
      </>
     
    );
  }