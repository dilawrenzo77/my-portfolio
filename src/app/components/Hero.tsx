export default function Hero() {
    return(
        <section className="w-full flex items-center justify-center py-10 gap-5 mt-[-50]">
            <div className="flex flex-col items-center justify-center gap-2 sm:gap-4 lg:gap-6 xl:gap-8 w-fit">
                <p className="text-center text-sm lg:text-lg xl:text-xl font-thin">I&apos;m</p>
                <p className="text-center text-4xl tracking-widest xl:text-6xl font-bold">MBATA LAWRENCE CHIBUZOR</p>
                <p className="text-center text-md lg:text-lg xl:text-xl font-thin ">Full-Stack Web/Ethereum Developer</p>
                <p className="text-center text-sm lg:text-lg xl:text-xl font-thin">&#91; <span className="text-center font-semibold text-md lg:text-lg xl:text-xl text-neutral-400">FrontEnd, BackEnd, Smart Contracts, dApps</span> &#93;</p>
                <button className="bg-neutral-600 rounded-full px-20 py-1 text-md lg:text-lg xl:text-xl">Download CV</button>
            </div>
        </section>
    )
};
