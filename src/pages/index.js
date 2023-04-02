import Head from "next/head";
import { Inter } from "next/font/google";
import Stats from "@/components/HomePageSections/Stats/Stats";
import Banner from "@/components/HomePageSections/Banner/Banner";
import Categories from "@/components/Categories/Categories";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-5" >
        <Banner></Banner>
        <Categories></Categories>
        <Stats></Stats>
      </div>
    </>
  );
}
