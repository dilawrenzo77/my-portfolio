import GlassIcons from './cubes';
import Next from "../../../public/nextjs-icon-svgrepo-com.svg";
import React from "../../../public/react-svgrepo-com.svg";
import Node from "../../../public/node-js-svgrepo-com.svg";
import Tailwind from "../../../public/tailwind-svgrepo-com.svg";
import PostGres from "../../../public/postgresql-logo-svgrepo-com.svg";
import Laravel from "../../../public/laravel-svgrepo-com.svg";
import Git from "../../../public/git-svgrepo-com.svg";
import Solidity from "../../../public/Solidity--Streamline-Svg-Logos.svg";
import MetaMask from "../../../public/metamask-icon.svg";
import Hardhat from "../../../public/Hardhat-Icon--Streamline-Svg-Logos.svg";
import Image from 'next/image';



const items = [
  { icon: <Image src={Next} width={100} height={100} alt="stack images"/>, color: 'gray', label: 'NextJs' },
  { icon: <Image src={React} width={50} height={50} alt="stack images"/>, color: 'gray', label: 'React' },
  { icon: <Image src={Node} width={50} height={50} alt="stack images"/>, color: 'gray', label: 'NodeJS' },
  { icon: <Image src={Tailwind} width={50} height={50} alt="stack images"/>, color: 'gray', label: 'TailwindCSS' },
  { icon: <Image src={PostGres} width={50} height={50} alt="stack images"/>, color: 'gray', label: 'Postgres' },
  { icon: <Image src={Laravel} fill alt="stack images"/>, color: 'gray', label: 'Laravel' },
  { icon: <Image src={Git} width={50} height={50} alt="stack images"/>, color: 'gray', label: 'Git' },
  { icon: <Image src={Solidity} width={50} height={50} alt="stack images"/>, color: 'gray', label: 'Solidity' },
  { icon: <Image src={MetaMask} width={50} height={50} alt="stack images"/>, color: 'gray', label: 'MetaMask' },
  { icon: <Image src={Hardhat} width={50} height={50} alt="stack images"/>, color: 'gray', label: 'HardHat' },
]

export default function Stack() {
    return(
        <section id="stack" className='flex flex-col items-center justify-start gap-4 w-[85vw]'>
            <p className="text-xl lg:text-2xl font-semibold tracking-widest">STACK</p>
            <GlassIcons items={items}/>
        </section>
    )
};
