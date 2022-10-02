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
          content="Block chain visualexample, inspired by Anders Brownworth"
        />
        {/* Facebook Meta Tags  */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Block Chain Visualization" />
        <meta
          property="og:description"
          content="Block chain visual example, inspired by Anders Brownworth"
        />
        <meta
          property="og:image"
          content="https://blockchain.damiisdandy.com/og.png"
        />

        {/* Twitter Meta Tags  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jetronmall.com" />
        <meta name="twitter:title" content="Block Chain Visualization" />
        <meta
          name="twitter:description"
          content="Block chain visual example, inspired by Anders Brownworth"
        />
        <meta
          name="twitter:image"
          content="https://blockchain.damiisdandy.com/og.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="main flex items-center justify-center">{children}</div>
      <Footer />
    </>
  );
};
