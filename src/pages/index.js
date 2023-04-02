import Head from "next/head";
import { Inter } from "next/font/google";
import Banner from "@/components/Shared/HomePageSections/Banner/Banner";
import { useSelector } from "react-redux";
import Stats from "@/components/Shared/HomePageSections/Stats/Stats";





const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {theme}=useSelector(state=>state.theme)
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-5" data-theme={theme ? "dark" : "light"}>
        <Banner></Banner>
        <Stats></Stats>
      </div>
    </>
  );
}
