import { useState } from "react";
import Button from "./shared/Button";

const Card = ({email, matric,  payClick, cancelCLick,  price, type, status}) =>{

  // const [showButton, setShowButton] = useState(0);

  return(
    <>
    <div className="w-[35rem] mx-auto ">
      <div>
        <h1 className="text-center pt-3 pb-8 font-semibold text-[1.4rem]">Confirm Your Information.</h1>
        <h3 className="pb-2 py-2">Email : {email}</h3>
        <h3 className="pb-2 py-2">Matric Number : {matric}</h3>
        <h3 className="pb-2 py-2">Price : {price}</h3>
        <h3 className="pb-2 py-2">Request Type : {type}</h3>
        <h3 className="pb-2 py-2">Request Status : {status} </h3>
      
        
      </div>
    </div>
    </>
  )
};

export default Card;