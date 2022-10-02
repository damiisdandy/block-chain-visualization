import type { NextPage } from "next";
import { useRouter } from "next/router";
import { GiBreakingChain } from "react-icons/gi";

const Home: NextPage = () => {
  const { push } = useRouter();
  return (
    <div className="p-4 text-center flex-col gap-3 h-full w-full flex items-center justify-center">
      <GiBreakingChain className="text-5xl transform -rotate-45" />
      <h1 className="text-2xl md:text-3xl font-extrabold">
        A Visual Representation of Blockchain Technology
      </h1>
      <p className="md:text-xl">
        Inspired by{" "}
        <a
          href="https://andersbrownworth.com/blockchain/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Anders Brownworth
        </a>
      </p>
      <button
        onClick={() => push("/hash")}
        className="bg-slate-700 text-white font-semibold rounded-md px-6 py-3 transform hover:scale-110 active:scale-90 transition-transform ease-in-out"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
