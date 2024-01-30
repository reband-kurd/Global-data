'use client'

import Sidebarme from "@/app/compunent/sidebarme"
import Yakambatane from "@/app/compunent/currency/yakambatane";
import Mynav from "@/app/compunent/mynav";
import Curydw from "@/app/compunent/currency/currencydwam";

function Page() {

    return (
        <>
        
                    
             
            <Sidebarme></Sidebarme>
            <Mynav></Mynav>
            <div className="absolute flex-col w-4/5 left-80 gap-3 flex">
                <h1 className="text-5xl text-gray-700 rounded font-bold">Currency</h1>
                <Yakambatane></Yakambatane>
                <Curydw></Curydw>
            </div>

        </>)
}

export default Page