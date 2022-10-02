import type { NextPage } from "next";
import { GiBreakingChain } from "react-icons/gi";

const Home: NextPage = () => {
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
    </div>
  );
};

export default Home;
