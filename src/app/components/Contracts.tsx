import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";

export default function Contacts() {
    return (
    <>
        <section id="contracts" className="flex flex-col items-center justify-start gap-6">
            <p className="text-xl tracking-widest font-semibold ">CONTACTS</p>
            <div className="w-[70vw] flex items-center justify-center gap-6">
                <Link href="https://github.com/dilawrenzo77">
                <div className="flex items-center justify-center gap-2 px-3 py-1 rounded-sm">
                    <FaGithub size={20}/>
                    <span className="text-md">|</span>
                    <p className="text-sm font-semibold">Github</p>
                </div>
                </Link>

                <Link href="https://www.linkedin.com/in/mbata-lawrence-5b46a71a3/">
                <div className="flex items-center justify-center gap-2 px-3 py-1 rounded-sm">
                    <FaLinkedin size={20}/>
                    <span className="text-md">|</span>
                    <p className="text-sm font-semibold">LinkedIn</p>
                </div>
                </Link>


                <Link href="https://www.instagram.com/di_loreenzo?igsh=MthmN3o3d3Vzc3Mw">
                <div className="flex items-center justify-center gap-2 px-3 py-1 rounded-sm">
                    <FiInstagram size={20}/>
                    <span className="text-md">|</span>
                    <p className="text-sm font-semibold">Instagram</p>
                </div>
                </Link>

            </div>
        </section>
    </>)
};
