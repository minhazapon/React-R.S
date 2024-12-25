import { useRef } from "react";
import Swal from "sweetalert2";




const Form = () => {
     

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const numberRef = useRef(null)
    const passwordRef = useRef(null)
  
    const handleForm = e =>{
    
    

    e.preventDefault()
    console.log(nameRef.current.value)
    console.log(emailRef.current.value)
    console.log(numberRef.current.value)
    console.log(passwordRef.current.value)

    if(nameRef){

      Swal.fire({
        title: 'Success!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      
      
    
    }


    }



    return (
        <div className=" mt-20 mb-20 ml-20 mr-20 ">

            <div>
               
               <form onSubmit={handleForm}>

                 <div className=" ">
                  
                   <div className=" grid  md:grid-cols-2 gap-5 ">

                   <input ref={nameRef} className=" border-[1px] border-blue-800  h-[60px] p-3 " required placeholder="Name" type="text"  />
                   <input ref={emailRef} className=" border-[1px] border-blue-800  h-[60px] p-3 " required placeholder="Email" type="email" name="" id="" />
                   <input ref={numberRef} className=" border-[1px] border-blue-800  h-[60px] p-3 " required placeholder="Number" type="number" name="" id="" />
                   <input ref={passwordRef} className=" border-[1px] border-blue-800  h-[60px] p-3 " required placeholder="Password" type="password" name="" id="" />
                   <input  className=" btn border-[1px] border-blue-800 h-[60px]  " type="submit" value="Submit" />


                   </div>

                 </div>
               </form>


            </div>
            
        </div>
    );
};

export default Form;