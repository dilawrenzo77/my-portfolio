import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Topproject from "./components/Topproject";
import Contracts from "./components/Contracts";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <div className="mx-auto flex flex-col items-center justify-center gap-20  lg:gap-25 xl:gap-35 mt-4 lg:mt-7 xl:mt-10 min-w-[320px] w-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <Stack />
        <Topproject />
        <Contracts />
        <Footer />
      </div>
    </>
  );
}
