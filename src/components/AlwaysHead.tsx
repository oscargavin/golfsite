import Head from "next/head";
import React from "react";

function AlwaysHead() {
    return (
        <Head>
            <title>Golfers Hub</title>
            <meta
                name="description"
                content="Golfer's Hub, a place for all golfing needs"
            />
            <link rel="icon" href="/logo.png" />
            <meta property="og:type" content="website" />
        </Head>
    );
}

export default AlwaysHead;