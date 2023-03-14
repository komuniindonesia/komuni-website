import styles from "@/styles/HeroSection.module.css";
import Link from "next/link";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="bg-[url('/images/hero-bg.png')] bg-cover bg-bottom py-24 sm:py-32 h-screen">
        <div className="mx-auto max-w-7xl px-10 h-full flex items-center">
          <div className="max-w-2xl lg:mx-0">
            <div className="flex flex-col gap-6">
              <h2 className={styles.tag}>Komuni</h2>
              <p className={styles.title}>
                Efficiently manage your activities and make everyone{" "}
                <span className="text-[#FF5722] font-extrabold">
                  more involved within your community
                </span>
              </p>
              <div className="col-span-2 mt-4">
                <Link href="#demo" className="buttonDemo px-14">
                  book a demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
