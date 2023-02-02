import React from "react"

import Link from "next/link";
import Image from "next/image";

import { IoMdTrophy } from "react-icons/io";
import { MdGolfCourse } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

function Header() {
    return (
        <header className="backdrop-blur bg-white/50 flex flex-row justify-around py-5 shadow-md pt-5">
            <Link href="/" className="flex flex-row items-center cursor-pointer">
                <Image src="/logo.png" alt="golf" width={50} height={50} />
                <h1 className="font-semibold text-xl">Golfers Hub</h1>
            </Link>
            <div className="flex flex-row space-x-10">
                <Link href="/" className="flex flex-row items-center space-x-3">
                    <IoMdTrophy />
                    <p className="transition duration-150 border-b-2 border-transparent hover:border-green-500 pt-[0.2rem]">Tournaments</p>
                </Link>
                <Link href="/courses" className="flex flex-row items-center space-x-3">
                    <MdGolfCourse />
                    <p className="transition duration-150 border-b-2 border-transparent hover:border-green-500 pt-[0.2rem]">Courses</p>
                </Link>
                <Link href="/" className="flex flex-row items-center space-x-3 ">
                    <FaUserCircle />
                    <p className="transition duration-150 border-b-2 border-transparent hover:border-green-500 pt-[0.2rem]">Profile</p>
                </Link>
            </div>
        </header>
    )
}

export default Header