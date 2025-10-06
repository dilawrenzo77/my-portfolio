import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Topproject from "./components/Topproject";
import Contracts from "./components/Contracts";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <div className="mx-auto flex flex-col items-center justify-start gap-15 sm:gap-0.5  mt-4 lg:mt-7 xl:mt-10 min-w-[320px] w-screen overflow-x-hidden">
        <Navbar />
        <div className="flex flex-col items-center justify-start gap-35 md:gap-40 lg:gap-45 min-w-[320px] w-screen overflow-x-hidden">
          <Hero />
          <Stack />
          <Topproject />
          <Contracts />
          <Footer />
        </div>
      </div>
    </>
  );
}
