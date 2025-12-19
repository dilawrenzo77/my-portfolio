import Link from "next/link";

export default function Hero() {
    return(
        <section className="w-full flex items-center justify-center py-10 gap-5">
            <div className="flex flex-col items-center justify-center gap-6 sm:gap-5 lg:gap-7 xl:gap-10 w-fit px-1.5">
                <p className="text-center text-md lg:text-lg xl:text-xl font-thin">I&apos;m</p>
                <p className="text-center text-4xl tracking-widest xl:text-6xl font-bold">MBATA LAWRENCE CHIBUZOR</p>
                <p className="text-center text-md lg:text-lg xl:text-xl font-thin ">Full-Stack Web Developer</p>
                <p className="text-center text-sm lg:text-lg xl:text-xl font-thin">&#91; <span className="text-center font-semibold text-md lg:text-lg xl:text-xl text-neutral-400">Java, Javascript, PHP, HTML, CSS</span> &#93;</p>
                <Link href="/WebMbataLawrence.pdf" download="mbatalawrenceResume.pdf">
                    <button className="bg-neutral-600 rounded-full px-5 py-2 text-md lg:text-lg xl:text-xl hover:scale-110 transition-all duration-300 border-2 border-white/50">Download CV</button>
                </Link>
                <div className="flex items-center justify-center gap-4 flex-wrap mt-5">
                    <Link href="https://github.com/dilawrenzo77">
                    <div className="bg-white/70 backdrop-blur-lg rounded-full p-0.5 cursor-pointer hover:scale-110 transition-all duration-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.24902C6.51613 2.24902 2 6.70064 2 12.249C2 16.6361 4.87097 20.3781 8.87097 21.7329C9.3871 21.8297 9.54839 21.5071 9.54839 21.2813C9.54839 21.0555 9.54839 20.4103 9.51613 19.5393C6.74194 20.1845 6.16129 18.1845 6.16129 18.1845C5.70968 17.0555 5.03226 16.7329 5.03226 16.7329C4.12903 16.0877 5.06452 16.0877 5.06452 16.0877C6.06452 16.12 6.6129 17.12 6.6129 17.12C7.48387 18.6684 8.96774 18.2168 9.51613 17.9264C9.6129 17.2813 9.87097 16.8297 10.1613 16.5716C7.96774 16.3458 5.6129 15.4748 5.6129 11.6684C5.6129 10.5716 6.03226 9.70064 6.64516 9.02322C6.54839 8.79741 6.19355 7.76515 6.74194 6.37806C6.74194 6.37806 7.6129 6.11999 9.51613 7.41031C10.3226 7.18451 11.1613 7.05548 12.0323 7.05548C12.9032 7.05548 13.7742 7.15225 14.5484 7.41031C16.4516 6.15225 17.2903 6.37806 17.2903 6.37806C17.8387 7.73289 17.5161 8.79741 17.3871 9.02322C18.0323 9.70064 18.4194 10.6039 18.4194 11.6684C18.4194 15.4748 16.0645 16.3458 13.871 16.5716C14.2258 16.8942 14.5484 17.5393 14.5484 18.4426C14.5484 19.7974 14.5161 20.8619 14.5161 21.1845C14.5161 21.4426 14.7097 21.7329 15.1935 21.6361C19.129 20.3135 22 16.6039 22 12.1845C21.9677 6.70064 17.4839 2.24902 12 2.24902Z" fill="#323544"/>
                        </svg>
                    </div>
                    </Link>
                    <Link href="https://www.linkedin.com/in/mbata-lawrence-5b46a71a3/">
                    <div className="bg-white/70 backdrop-blur-lg rounded-full p-0.5 cursor-pointer hover:scale-110 transition-all duration-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.7065 3H4.34844C3.62264 3 3.04199 3.58065 3.04199 4.30645V19.6935C3.04199 20.3903 3.62264 21 4.34844 21H19.6485C20.3743 21 20.9549 20.4194 20.9549 19.6935V4.27742C21.013 3.58065 20.4323 3 19.7065 3ZM8.35491 18.3H5.71297V9.73548H8.35491V18.3ZM7.01942 8.54516C6.14846 8.54516 5.4807 7.84839 5.4807 7.00645C5.4807 6.16452 6.17749 5.46774 7.01942 5.46774C7.86136 5.46774 8.55813 6.16452 8.55813 7.00645C8.55813 7.84839 7.91942 8.54516 7.01942 8.54516ZM18.371 18.3H15.7291V14.1484C15.7291 13.1613 15.7001 11.8548 14.3356 11.8548C12.942 11.8548 12.7388 12.9581 12.7388 14.0613V18.3H10.0968V9.73548H12.6807V10.9258H12.7097C13.0872 10.229 13.9291 9.53226 15.2356 9.53226C17.9356 9.53226 18.4291 11.2742 18.4291 13.6548V18.3H18.371Z" fill="#323544"/>
                        </svg>
                    </div>
                    </Link>
                    <div className="bg-white/70 backdrop-blur-lg rounded-full p-0.5 px-3 text-black">
                        <p>mbatalawrence@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
};
