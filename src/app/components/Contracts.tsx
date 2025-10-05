import Accord from "./Accord";
import  Projects  from "@/lib/web3Projects";

export default function Contracts() {
    return (
    <>
        <section id="contracts" className="flex flex-col items-center justify-start gap-5">
            <p className="text-xl tracking-widest font-semibold ">SMART CONTRACTS</p>
            <div className="w-[70vw]">
                {Projects.map((item,i) => (<Accord key={i} data={item} />))}
            </div>
        </section>
    </>)
};
