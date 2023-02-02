import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";

import Header from "@/components/Header";
import Map from "@/components/Map";

const Courses: NextPage = () => {
    return (
        <div className="gradient-background h-screen">
            <Script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
                integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
                crossOrigin=""></Script>
            <Header />
            <div className="flex justify-center mt-16">
                <div className="w-2/5 rounded-md overflow-hidden">
                    <Map />
                </div>
            </div>

        </div>
    )
}

export default Courses;