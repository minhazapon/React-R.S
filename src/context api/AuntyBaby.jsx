import { useContext } from "react";
import { GiveGift } from "./GrabdFather";



const AuntyBaby = () => {

    const Gift = useContext(GiveGift)

    return (
        <div>

        <p className=" text-center text-2xl font-bold text-green-700 ">Aunty baby</p> 
        <p>GrandPa Send: {Gift} for baby</p>
            
        </div>
    );
};

export default AuntyBaby;