// import Container from "../component/Container";

import SignupForm from "../component/SignupForm";
import requesti from "../../src/assets/requestii.svg"
import { useNavigate } from "react-router-dom";
import { Applinks } from "../utils/Linkings";
import axios from "axios"
import { useSignupForm } from "../context/Context";


const Signup = ()=>{

  const redirect = useNavigate();
  const signupData = useSignupForm()
  


  const handleSubmit = async (e)=>{

    e.preventDefault()

   try{
    const result = await axios({
      method: 'post',
      url: 'http://127.0.0.1:3400/api/v1/signup',
      data: signupData
    });

    if(result.data.status === false) throw new Error(result.data.message);

      console.log(result.data)
    localStorage.setItem("studentInfo", JSON.stringify({email: result.data.data.email, matric_no: result.data.data.matric_no, student_id: result.data.data.student_id}));
    
    alert(result.data.message);
  
    redirect(Applinks.VerifyOtp.path)
   } catch(error){
    console.log(error)
      alert(error.response.data.message)
   }
  }

  return(
    <>
      <div className=" mx-auto mt-[5rem]">
         <div className="border w-[70rem] py-10 shadow-2xl mx-auto rounded-xl">
         <div className="w-[5%] mx-auto my-5">
            <img src={requesti} className="" alt="" />
          </div>
          <h1 className="text-center  text-[3rem] my-5 font-semibold">Become a Student</h1>
          <div className="   ">
            
            <SignupForm onSubmit={handleSubmit}/>
            
          </div> 
         </div>
      </div>
    </>
  )
};

export default Signup;