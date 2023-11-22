import ReactCodeInput from "react-code-input"
import Button from "../component/shared/Button";
import requesti from "../../src/assets/requestii.svg"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Applinks } from "../utils/Linkings";


const VerifyOtp = ()=>{

  const redirect = useNavigate();

  const studentInfo = JSON.parse(localStorage.getItem("studentInfo"));

  const [otp, setOtp] = useState({ otp: ""});

  const handleChange = (_otp)=>{
    setOtp({...otp, otp: _otp});
  };

  const handleVerify = async ()=>{
    try{
      const response = await axios({
        method: 'patch',
        url:`http://127.0.0.1:3400/api/v1/verify/${studentInfo.email}`,
        data: otp
      });


      if(response.data.status === false) throw new Error(response.data.message);

      alert(response.data.message);
      redirect(Applinks.Login.path);


    }catch(error){
      alert(error.response.data.message);
    }
  };

  return(
    
    <>
    <div className="text-center h-screen flex items-center content-center ">
      
      <div className="border w-[40rem] shadow-2xl mx-auto py-[5rem] rounded-xl">
        <div className=" mx-auto  mb-5">
            <div className="w-[5%] mx-auto my-2">
              <img src={requesti} className="" alt="" />
            </div>
          <h1 className="text-[3rem] font-semibold pt-3 pb-3">Verify Otp</h1>
          <p className="text-[1.2rem] font-light mb-4">Please enter 6-digit OTP sent to your E-mail</p>
          <ReactCodeInput type='number' fields={6} onChange={handleChange} value={otp}/>
        </div>
        <Button 
        btnText="Verify" 
        type="button" 
        className="border bg-orange-600 text-white rounded-xl py-2 mt-5 px-2 w-[20%]"
        onClick={handleVerify}
        />
      </div>
    </div>
    </>
  )
};
export default VerifyOtp;