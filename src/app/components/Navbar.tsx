"use clint"
import { VscTools } from "react-icons/vsc";
import { TbFileSignal } from "react-icons/tb";
import { BiSolidContact } from "react-icons/bi";
import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="mx-auto">
            <div className="flex items-center justify-between gap-8 lg:gap-12">
                <Link href="#stack">
                <div className="group hover:bg-white/20 hover:border-b-1 hover:border-dashed hover:px-2 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                    <p className="font-thin text-lg lg:text-xl 2xl:text-2xl">Stacks</p>
                    <VscTools size={15} className="group-hover:visible invisible"/>
                </div>
                </Link>

                <Link href="#projects">
                <div className="group hover:bg-white/20 hover:border-b-1 hover:border-dashed hover:px-2 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                    <p className="font-thin text-lg lg:text-xl 2xl:text-2xl">Projects</p>
                    <TbFileSignal size={15} className="group-hover:visible invisible"/>
                </div>
                </Link>

                <Link href="#contracts">
                <div className="group hover:bg-white/20 hover:border-b-1 hover:border-dashed hover:px-2 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                    <p className="font-thin text-lg lg:text-xl 2xl:text-2xl">Contracts</p>
                    <BiSolidContact size={15} className="group-hover:visible invisible"/>
                </div>
                </Link>
            </div>
        </nav>
    )
};
