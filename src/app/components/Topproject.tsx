import Projects from "@/lib/web2Projects"
import ProCard from "@/app/components/proCard";


export default function Topproject() {
    return(
        <section id="projects" className=" w-full flex flex-col items-center justify-center gap-6 px-10">
            <p className="text-xl lg:text-2xl tracking-widest font-semibold">PROJECTS</p>
            <div className="flex flex-col items-center justify-center gap-8">
                {Projects.map((project, i) => (<ProCard key={i} data={project}/>))}
            </div>
        </section>
    )
};
