import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="dark bg-gray-900 text-white min-h-screen">
      <Component {...pageProps} />
    </div>
  );
}