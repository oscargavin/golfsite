import React from "react"

import Link from "next/link";

interface ButtonProps {
    title: string;
    link: string;
}

function Button({ title, link }: ButtonProps) {
    return (
        <div className="border-2 border-green-600 rounded-lg shadow-sm bg-gray-100 px-4 hover:bg-green-600 ease-in-out">
            <Link href={link}>
                <p className="text-gray-800 hover:text-gray-50">{title}</p>
            </Link>
        </div>

    )
}

export default Button;