import { createContext } from "react";
import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";



export const GiveGift = createContext('baby Gift')

const GrabdFather = () => {
    return (
        <div className=" border-[1px] border-gray-500 p-10 ">

            <p className=" text-5xl font-bold text-center ">GrandFather</p>

            <GiveGift.Provider value="baby Gift">

            <div className=" mt-20 flex justify-center items-center gap-10 ">
              
              <Dad></Dad>
              <Uncle></Uncle>
              <Aunty></Aunty>


            </div>

            </GiveGift.Provider>

         
            
        </div>
    );
};

export default GrabdFather;