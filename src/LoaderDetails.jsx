


const LoaderDetails = ({data}) => {

    const {title, body} = data

    return (
        <div>

            <div className=" details-div rounded-xl ">
             
              <p className=" title-text ">{title}</p>
              <p className=" body-text ">{body}</p>
      

            </div>
            
        </div>
    );
};

export default LoaderDetails;