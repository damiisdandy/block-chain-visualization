import Head from "next/head";
import { FC, ReactNode } from "react";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Block Chain Visualization</title>
        <meta
          name="description"
          content="Block chain visualization example, inspired by Anders Brownworth"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="h-[calc(100vh-theme(space.24))] flex items-center justify-center">
        {children}
      </div>
      <Footer />
    </>
  );
};
