import Head from "next/head";
import { Open_Sans } from "next/font/google";
import WorkTogetherSection from "@/sections/WorkTogetherSection";
import SolutionsSection from "@/sections/SolutionsSection";
import Footer from "@/sections/Footer";
import BookDemoSection from "@/sections/BookDemoSection";
import HeroSection from "@/sections/HeroSection";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Komuni</title>
        <meta name="description" content="Komuni" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={openSans.className}>
        <HeroSection />
        <WorkTogetherSection />
        <SolutionsSection />
        <BookDemoSection />
      </main>
      <Footer />
    </>
  );
}
