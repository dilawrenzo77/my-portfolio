import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";


interface ProjectProps {
    projectId: number;
    projectName: string;
    projectDescription: string;
    projectFeatures: string[];
    projectGithub: string;
    etherScan: string;
}
interface DataProps {
    data: ProjectProps
}

export default function Accord({ data }: DataProps) {
    return(
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="space-y-6 px-2">
                <AccordionTrigger className="bg-gray-800/70 backdrop-blur-lg  w-full px-4 hover:no-underline">{data.projectName}</AccordionTrigger>
                <AccordionContent className="w-80% flex flex-col items-start justify-center gap-3 px-2">
                    <div className="text-wrap ">
                        <p className="text-sm ">{data.projectDescription}</p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1">
                        {data.projectFeatures.map((feature, i) => <p key={i} className="text-xs"><span>&bull;</span>{feature}</p>)}
                    </div>
                    <div className="flex items-center justify-start gap-4">
                        <Link href={data.projectGithub}>
                            <div className="flex items-center justify-start gap-1">
                                <p>Github</p>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M2 11.9991C2 6.47668 6.47729 2 11.9996 2C17.5218 2 21.9991 6.47668 21.9991 11.9991C21.9991 17.5214 17.5218 21.9981 11.9996 21.9981C6.47729 21.9981 2 17.5214 2 11.9991ZM11.9996 3.5C7.30561 3.5 3.5 7.30521 3.5 11.9991C3.5 16.6929 7.30561 20.4981 11.9996 20.4981C16.6935 20.4981 20.4991 16.6929 20.4991 11.9991C20.4991 7.30521 16.6935 3.5 11.9996 3.5Z" fill="#ffffffff"/>
                                    <path d="M13.6279 11.2488H8.55981C8.1456 11.2488 7.80981 11.5846 7.80981 11.9988C7.80981 12.413 8.1456 12.7488 8.55981 12.7488H13.6303L12.2583 14.1217C11.9655 14.4146 11.9656 14.8895 12.2586 15.1823C12.5516 15.4751 13.0265 15.475 13.3193 15.182L15.9574 12.5422C16.101 12.4055 16.1904 12.2126 16.1904 11.9988C16.1904 11.7723 16.0901 11.5693 15.9313 11.4317L13.3193 8.81785C13.0265 8.52485 12.5516 8.52469 12.2586 8.81748C11.9656 9.11027 11.9655 9.58514 12.2583 9.87814L13.6279 11.2488Z" fill="#323544"/>
                                </svg>
                            </div>
                        </Link>
                        <p className="text-xs"><span className="text-xs font-semibold">EtherScan:</span> {data.etherScan}</p>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
};
