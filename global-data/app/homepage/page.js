'use client'

import Sidebarme from "@/app/compunent/sidebarme"
import Yakamnaxsha from "@/app/compunent/home/yakamnaxsha";
import Mynav from "@/app/compunent/mynav";

function Page() {

    return (
        <>
            <Sidebarme></Sidebarme>
            <Mynav></Mynav>
            <div className="absolute flex-col w-4/5 left-80 gap-3 flex ">
                <h1 className="text-5xl text-gray-700 rounded font-bold">Home</h1>
                <Yakamnaxsha></Yakamnaxsha>
            </div>
        </>)
}

export default Page