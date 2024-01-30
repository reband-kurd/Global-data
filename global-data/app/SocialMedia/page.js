'use client'

import Sidebarme from "@/app/compunent/sidebarme"

import Mynav from "@/app/compunent/mynav";
import Socialyak from "@/app/compunent/social/socialyak";
import Socialdw from "@/app/compunent/social/socialdw";
import Socialsee from "@/app/compunent/social/socialsee";

function Page() {

    return (
        <>



            <Sidebarme></Sidebarme>
            <Mynav></Mynav>
            <div className="absolute flex-col w-4/5 left-80 gap-3 flex ">
                <h1 className="text-5xl text-gray-700 rounded font-bold">Social Media</h1>
                <div className="flex flex-row justify-center gap-2 ">
                    <Socialyak></Socialyak>
                    <div className="flex flex-col mt-3 gap-4">
                        <Socialdw></Socialdw>
                        <Socialdw></Socialdw>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Socialsee></Socialsee>
                </div>
            </div>


        </>)
}

export default Page