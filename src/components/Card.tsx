import React from "react"

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

interface CardProps {
    image: string;
    alt: string;
    title: string;
    description: string;
    link: string;
}

function Card({ image, alt, title, description, link }: CardProps) {
    return (
        <div className="backdrop-blur bg-white/50 border-2 rounded-md shadow-md w-1/4 justify-center my-5 mx-3 px-1 pt-1 transform hover:scale-110 transition duration-500 ease-in-out cursor-pointer">
            <Link href={link}>
                <Image src={image} alt={alt} width={300} height={300} className="object-cover w-full h-2/5 rounded-sm" />
                <div className="h-3/5 rounded-b-sm flex flex-col px-5 py-3 space-y-3 pt-5 relative">
                    <h1 className="font-bold">{title}</h1>
                    <p className="overflow-hidden">{description}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card