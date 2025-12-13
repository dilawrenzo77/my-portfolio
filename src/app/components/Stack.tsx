import GlassIcons from './cubes';
import Next from "../../../public/nextjs-icon-svgrepo-com.svg";
import React from "../../../public/react-svgrepo-com.svg";
import Node from "../../../public/node-js-svgrepo-com.svg";
import Tailwind from "../../../public/tailwind-svgrepo-com.svg";
import PostGres from "../../../public/postgresql-logo-svgrepo-com.svg";
import Laravel from "../../../public/laravel-svgrepo-com.svg";
import Git from "../../../public/git-svgrepo-com.svg";
import Spring from "../../../public/spring-boot-icon.svg";
import Docker from "../../../public/docker-icon.svg";
import Image from 'next/image';



const items = [
  { icon: <Image src={Next} width={50} height={50} alt="stack images" className="object-cover"/>, color: 'gray', label: 'NextJs' },
  { icon: <Image src={React} width={50} height={50} alt="stack images" className="object-cover"/>, color: 'gray', label: 'React' },
  { icon: <Image src={Spring} width={50} height={50} alt="stack images" className="object-cover"/>, color: 'gray', label: 'Spring' },
  { icon: <Image src={Node} width={50} height={50} alt="stack images" className="object-cover"/>, color: 'gray', label: 'NodeJS' },
  { icon: <Image src={Tailwind} width={50} height={50} alt="stack images" className="object-cover"/>, color: 'gray', label: 'TailwindCSS' },
  { icon: <Image src={PostGres} width={50} height={50} alt="stack images" className="object-cover"/>, color: 'gray', label: 'Postgres' },
  { icon: <Image src={Laravel} fill alt="stack images" className="object-cover"/>, color: 'gray', label: 'Laravel' },
  { icon: <Image src={Git} width={50} height={50} alt="stack images" className="object-cover"/>, color: 'gray', label: 'Git' },
  { icon: <Image src={Docker} width={50} height={50} alt="stack images" className="object-cover"/>, color: 'gray', label: 'Docker' }
]

export default function Stack() {
    return(
        <section id="stack" className='flex flex-col items-center justify-start gap-6 w-[85vw]'>
            <p className="text-xl lg:text-2xl font-semibold tracking-widest">STACK</p>
            <GlassIcons items={items}/>
        </section>
    )
};
