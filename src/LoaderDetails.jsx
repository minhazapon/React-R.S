import { Link, useNavigate } from "react-router-dom";



const LoaderDetails = ({data}) => {

    const {id, title, body} = data

   
    return (
        <div>

            <div className=" details-div rounded-xl ">
             
              <p className=" title-text ">{title}</p>
              <p className=" body-text ">{body}</p>
              <Link to={`/loader/${id}`}>
              <button className=" btn bg-black border-[1px] border-cyan-400 mt-10 text-white ">Details</button>
              </Link>
            
            
      

            </div>
            
        </div>
    );
};

export default LoaderDetails;