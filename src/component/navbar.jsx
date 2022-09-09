import React from "react";
export default function navbar(){
    return(
        <nav className="border-black flex w-full pl-[30px] h-[60px] shadow bg-fixed bg-white 
        justify-between">
            <div> 
            <h2 className="cursor-pointer hover:bg-gray-300 mt-[10px] px-3 py-2"><span  className="text-lg font-bold mr-3">BR</span> Architects</h2>
            </div>
            <div>
                <ul className="cursor-pointer flex w-[300px] mr-[70px]">
                   <li className="hover:bg-gray-300 px-3 py-2 tracking-widest mt-3 ">Projects</li>
                   <li className="hover:bg-gray-300 px-3 py-2 tracking-widest mt-3 ">About</li>
                   <li className="hover:bg-gray-300 px-3 py-2 tracking-widest mt-3 ">Contact</li>
                </ul>
            </div>

        </nav>
    )
}