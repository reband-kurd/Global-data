'use client'

import Sidebarme from "@/app/compunent/sidebarme"
import Crypyak from "@/app/compunent/Crypto/crypyak";
import Mynav from "@/app/compunent/mynav";
import Crydww from "@/app/compunent/Crypto/crydww";

function Page() {

    return (
        <>
            <Sidebarme></Sidebarme>
            <Mynav></Mynav>

            <div className="absolute flex-col w-4/5 left-80 gap-3 flex">
                <h1 className="text-5xl text-gray-700 rounded font-bold">Crypto</h1>
                <Crypyak></Crypyak>
                <Crydww></Crydww>
            </div>

        </>)
}

export default Page