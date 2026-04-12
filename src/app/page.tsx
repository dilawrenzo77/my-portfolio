import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Topproject from "./components/Topproject";
import Experience from "./components/Experience";
import Contacts from "./components/Contracts";
import Footer from "./components/Footer";
import About from "./components/About";
import BackToTop from "./components/BackToTop";


export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-start gap-15 sm:gap-0.5 min-w-[320px] w-full overflow-x-hidden ">
        <div className="bg-[url('/herobg.png')] bg-cover bg-center bg-no-repeat w-screen flex flex-col items-center justify-start">
          <Navbar />
          <Hero />
        </div>
        <div className="mt-30 flex flex-col items-center justify-start gap-35 md:gap-40 lg:gap-45 min-w-[320px] w-screen overflow-x-hidden">
          <About />
          <Stack />
          <Topproject />
          <Experience />
          <Contacts />
          <Footer />
          <BackToTop />
        </div>
      </div>
    </>
  );
}
