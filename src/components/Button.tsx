import React from "react"

import Link from "next/link";

interface ButtonProps {
    title: string;
    link: string;
}

function Button({ title, link }: ButtonProps) {
    return (
        <div className="border-2 border-green-600 rounded-lg shadow-md bg-gray-100 text-gray-800 hover:text-gray-50 px-4 hover:bg-green-600 ease-in-out">
            <Link href={link} className="flex justify-center">
                <p className="text-inherit hover:text-inherit mx-auto">{title}</p>
            </Link>
        </div>

    )
}

export default Button;