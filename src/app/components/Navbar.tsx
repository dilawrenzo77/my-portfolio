"use client"
import { VscTools } from "react-icons/vsc";
import { TbFileSignal } from "react-icons/tb";
import { BiSolidContact } from "react-icons/bi";
import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="flex items-center justify-start">
            <div className="w-full flex items-center justify-center sm:justify-between gap-10 lg:gap-12 mx-auto flex-wrap">
                <Link href="#stack">
                <div className="group hover:bg-white/20 hover:border-b-1 hover:border-dashed hover:px-2 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-4 lg:gap-10 cursor-pointer">
                    <p className="font-thin text-md lg:text-xl 2xl:text-2xl">Stacks</p>
                    <VscTools size={15} className="group-hover:flex hidden"/>
                </div>
                </Link>

                <Link href="#projects">
                <div className="group hover:bg-white/20 hover:border-b-1 hover:border-dashed hover:px-2 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-4 lg:gap-10 cursor-pointer">
                    <p className="font-thin text-md lg:text-xl 2xl:text-2xl">Projects</p>
                    <TbFileSignal size={15} className="group-hover:flex hidden"/>
                </div>
                </Link>

                <Link href="#contracts">
                <div className="group hover:bg-white/20 hover:border-b-1 hover:border-dashed hover:px-2 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-4 lg:gap-10 cursor-pointer">
                    <p className="font-thin text-md lg:text-xl 2xl:text-2xl">Contacts</p>
                    <BiSolidContact size={15} className="group-hover:flex hidden"/>
                </div>
                </Link>
            </div>
        </nav>
    )
};
