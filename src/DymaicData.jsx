import { useLoaderData } from "react-router-dom";




const DymaicData = () => {

    const all = useLoaderData()

    const {id, title, body} = all

    return (
        <div className=" D-Dive ">

            <div className=" dy-div ">
               

               <p className="  ">{id}</p>
               <br></br>
               <p className=" text-green-600">{body}</p>
               <br></br>
               <p className=" text-cyan-400">{title}</p>

            </div>
            
        </div>
    );
};

export default DymaicData;