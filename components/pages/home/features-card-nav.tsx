import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface FeatureCardNavProps {
    title: string,
    description: string,
    img: string | StaticImport,
    href: string,
}

export default function FeatureCardNav(props: FeatureCardNavProps){
    return (
        <>
            <Link href={props.href}>
                <div className="w-72 h-44 gap-0 rounded-2xl border-2 border-solid border-black px-3 py-2 flex flex-col justify-center items-center">
                    <Image src={props.img} alt="Logo" width={80} height={69} />
                    <div className="text-center">
                        <h6 className="font-bold text-xl font-nunito">{props.title}</h6>
                        <p className="font-normal text-sm poppins-regular">{props.description}</p>
                    </div>
                </div>
            </Link>
        </>
    )
  }