import { useLoaderData } from "react-router-dom";
import LoaderDetails from "./LoaderDetails";




const Loader = () => {
    

    const Data = useLoaderData();



    return (
        <div className=" loader-div ">
            <div className=" flex-div ">
                <div className=" grid  md:grid-cols-3 gap-10  ">

                   {

                     Data.map( data => <LoaderDetails data={data}></LoaderDetails> )

                   }
 

                </div>
            </div>
        </div>
    );
};

export default Loader;