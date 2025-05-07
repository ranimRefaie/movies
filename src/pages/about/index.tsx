import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Movies App</title>
      </Head>

      <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      <Navbar />
      
      <main className="flex-grow p-6 md:p-12 mt-16">
        <div className="max-w-4xl mx-auto text-center md:p-12">
          <h1 className="text-4xl font-bold mb-6 text-[#FF0037]">About This Project</h1>
          <p className="text-lg mb-8 text-gray-300">
            This movie app was built with modern web technologies to fetch and display popular movies from TMDB.
          </p>
          <h2 className="text-2xl font-semibold mb-4 mt-10">Technologies Used</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
            <div className="flex flex-col items-center justify-center">
              <Image src="/next1.jpg" alt="Next.js" width={60} height={60} />
              <span className="mt-2 text-sm">Next.js</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image src="/ts.svg" alt="TypeScript" width={60} height={60} />
              <span className="mt-2 text-sm">TypeScript</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image src="/tailwind.svg" alt="Tailwind CSS" width={60} height={60} />
              <span className="mt-2 text-sm">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image src="/tmbd.png" alt="TMDB" width={60} height={60} />
              <span className="mt-2 text-sm">TMDB API</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
    </>
  );
}