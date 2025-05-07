import Image from "next/image";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="bg-gray-800 text-white rounded-xl shadow-md overflow-hidden">
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={300}
        height={450}
        className="w-full h-auto"
      />
      <div className="p-2">
        <h2 className="text-lg font-semibold">{movie.title}</h2>
      </div>
    </div>
  );
}