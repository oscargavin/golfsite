import React from "react"

import Link from "next/link";

interface ButtonProps {
    title: string;
    link: string;
}

function Button({ title, link }: ButtonProps) {
    return (
        <div className="border-2 rounded-lg shadow-sm bg-green-400 px-4 hover:bg-green-600 ease-in-out">
            <Link href={link}>
                <p className="text-gray-400 hover:text-gray-200">{title}</p>
            </Link>
        </div>

    )
}

export default Button;