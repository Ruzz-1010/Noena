import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function TextFooter() {
  return (
    <>
      {/* Left Text - Pink Theme */}
      <h1
        className={`
          absolute left-4 sm:left-6 md:left-10 
          bottom-4 sm:bottom-5 
          transform -translate-y-1/2 
          text-white 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          font-bold leading-tight 
          ${playfairDisplay.className}
          max-w-[40%] sm:max-w-[45%] md:max-w-none
          drop-shadow-lg
        `}
      >
        <span className="text-pink-200">Match</span>{" "}
        <br className="hidden xs:block" /> 
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-100 to-white">
          the tulips
        </span>
      </h1>

      {/* Right Text - Pink Theme */}
      <h1
        className={`
          absolute right-4 sm:right-6 md:right-10 
          bottom-4 sm:bottom-5 
          transform -translate-y-1/2 
          text-white 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          font-bold leading-tight text-right 
          ${playfairDisplay.className}
          max-w-[40%] sm:max-w-[45%] md:max-w-none
          drop-shadow-lg
        `}
      >
        to reveal <br className="hidden xs:block" />{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-rose-200">
          the surprise
        </span>
      </h1>

      {/* Copyright - Pink Theme */}
      <p className="absolute bottom-2 sm:bottom-5 right-2 sm:right-5 text-pink-100 text-[10px] sm:text-xs opacity-40 hover:opacity-70 transition-opacity drop-shadow">
        © {new Date().getFullYear()}{" "}
        <Link 
          href="https://visibait.com" 
          className="hover:underline text-pink-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ruzzgithub.com
        </Link>
        {" "}🌷
      </p>
    </>
  );
}