import React from "react";

import Image from "next/image";
import Table from "@/components/Table";
import Button from "@/components/Button";

interface ProfileDetailsProps {
    image: string;
    alt: string;
    title: string;
    email: string;
}


function ProfileDetails({ image, alt, title, email }: ProfileDetailsProps) {
    return (
        <div className="">
            <div className="bg-gray-50 rounded-2xl shadow-lg pr-4">
                <div className="pl-12 pt-8">
                    <h1 className="text-2xl font-semibold">My Profile</h1>
                    <p className="font-extralight">Manage your profile settings</p>
                </div>
                <div className="flex flex-row items-center px-12 py-6">
                    <Image src={image} alt={alt} width="100" height="100" className="rounded-full border-2 mr-4 shadow-md" />
                    <div className="space-y-6">
                        <Button title="Edit Picture" link="/" />
                        <Button title="Delete Picture" link="/" />
                    </div>
                </div>
                <div className="px-12 pb-8">
                    <div className="mb-2">
                        <h1 className="font-extralight pl-2 pb-1">Name</h1>
                        <p className="border-2 rounded-lg shadow-sm bg-gray-50 px-2 py-2 font-light text-gray-700">{title}</p>
                    </div>
                    <div>
                        <h1 className="font-extralight pl-2 pb-1">Email</h1>
                        <p className="border-2 rounded-lg shadow-sm bg-gray-50 px-2 py-2 font-light text-gray-700">{email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails;