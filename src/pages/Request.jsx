
import { useState } from "react";
import Card from "../component/Card";
import { useConfirmRequest } from "../context/Context";
import axios from "axios";
import { usePaystackPayment, PaystackButton } from "react-paystack"
import Button from "../component/shared/Button";

const Request = ()=>{
  const [showButton, setShowButton] = useState(0);
  const confirmRequest = useConfirmRequest();
  const auth = localStorage.getItem('token');
  const studentInfo = JSON.parse(localStorage.getItem('student_info'));


  const config = {
    reference: (new Date()).getTime().toString(),
    email: confirmRequest.email,
    amount: confirmRequest.price * 100,
    publicKey: 'pk_test_be7f66d7c09c5522e18908c09d76070777835a38',
  };


  const onSuccess = async(reference) => {
    try{
        const payData = {
          reference : reference,
          student_id : studentInfo.student_id,
          request_id : confirmRequest.request_id
        };
        
  
          const response = await axios({
          method: "post",
          url: "http://127.0.0.1:3400/api/v1/complete-payment",
          data: payData,
          headers: {
            'Authorization': `Bearer ${auth}`,
            'Content-Type' : 'application/json'
          }
        });
  
    
          if(response.data.status === false) throw new Error(response.data.message);
    
          console.log(response.data.data);
    
      } catch(error){
            console.log(error)
            console.log(error.response.data.message);
      }
    alert("Payment successfully completed");
    console.log("Payment successfully completed");
  };
 
  const onClose = () => {
    alert("Your payment was unsuccessful, try again later!");
  }

  // const initializePayment = usePaystackPayment({
  //   ...config,
  //   amount: config.amount

  // });

  const componentProps = {
    ...config,
    text: 'Make Payment',
    onSuccess: ({reference}) => onSuccess(reference),
    onClose: null,
};

  return(
    <>
      <div>
        <div className="border p-[2rem] shadow-xl drop-shadow-lg rounded-xl mb-[7rem] w-[40%] mx-auto">
           <Card email={confirmRequest.email}   matric={confirmRequest.matric_no} price={confirmRequest.price} type={confirmRequest.request_type} status={confirmRequest.request_status} />

          {showButton === 0 ? <div><Button type="button" onClick={()=> setShowButton(1)} className="border bg-green-600 text-white rounded py-2 mt-7 px-2 w-[20%]" btnText="Confirm "/>
            
            <Button type="button" onClick="" className="border bg-red-600 text-white float-right rounded py-2 mt-7 px-2 w-[20%]" btnText="Cancel "/></div> : 
            
            <div>
              {/* <Button type="button" onClick={() => initializePayment()} className="border bg-green-600 text-white rounded py-2 mt-7 content-center px-2 w-[30%]" btnText="Make Payment "/> */}
              <PaystackButton {...componentProps}  className="border bg-green-600 text-white rounded py-2 mt-7 content-center px-2 w-[30%]"/>
            </div>} 
        </div>
      </div>
      
      
    </>
  )
};

export default Request;

