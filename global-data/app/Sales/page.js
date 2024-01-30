'use client'

import Sidebarme from "@/app/compunent/sidebarme"
import Salesyakam from "@/app/compunent/sales/sales";
import Mynav from "@/app/compunent/mynav";
import Salsedw from "@/app/compunent/sales/salsedw";
import Salsesee from "@/app/compunent/sales/salsesee";
import Salsechar from "@/app/compunent/sales/salsechar";
import Salseshash from "@/app/compunent/sales/salesshash";
import Salsepenj from "@/app/compunent/sales/salsepenj";
function Page() {

    return (
        <>



            <Sidebarme></Sidebarme>
            <Mynav></Mynav>
            <div className="absolute flex-col w-4/5 left-80 gap-3 flex">
                <h1 className="text-5xl text-gray-700 rounded font-bold">Sales</h1>
                <div className="flex flex-row justify-center gap-2 w-full ">
                    <Salesyakam></Salesyakam>
                    <div className="flex flex-col mt-3 gap-4">
                        <Salsedw></Salsedw>
                        <Salsesee></Salsesee>
                        <Salsechar></Salsechar>
                    </div>
                    <div className="flex flex-col mt-3 gap-4">
                        <Salsedw></Salsedw>
                        <Salsesee></Salsesee>
                        <Salsechar></Salsechar>
                    </div>

                </div>
                <div className="flex justify-center flex-col gap-3">
                    <Salseshash></Salseshash>
                    <Salsepenj></Salsepenj>
                </div>
            </div>

        </>)
}

export default Page