import { useState } from "react";
import {  useSetConfirmRequest, useSetIsLoggedIn } from "../context/Context";
import Container from "../component/Container";
import homePic from "../assets/leon-wu-LLfRMRT-9AY-unsplash.jpg"
import Button from "../component/shared/Button";
import Select from "../component/shared/Select";
import Label from "../component/shared/Label";
import { Applinks } from "../utils/Linkings";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { APIS_URL } from "../services/api";
// import Card from "../component/Card";


const HomePage = ()=>{

  const [showReq, setShowReq ] = useState(false);
  // const [isconfirmRequest, setIsConfirmRequest] = useState(false);
  const redirect = useNavigate();
  const studentInfo = JSON.parse(localStorage.getItem('student_info'));
  const auth = localStorage.getItem('token');
  const seIsLoggedIn = useSetIsLoggedIn();
  const setConfirmRequest = useSetConfirmRequest();

  if(!auth){ 
    redirect(Applinks.Login.path);
  };

  const handleShowReq = ()=>{
    setShowReq(true);
  }

  seIsLoggedIn(true);

  const [request, setRequest] = useState({ request_type:""});

  const handleRequestChange = (e) =>{
    setRequest({ ...request, [e.target.name] : e.target.value });
  };

  const handleRequestClick = async (e)=>{
    e.preventDefault();
    

    try{

      const auth = localStorage.getItem('token');
      if(!auth){ 
        redirect(Applinks.Login.path);
      };


      const response = await axios({
        method: 'post',
        url:`${process.env.REACT_APP_API_HOST}${APIS_URL.REQUEST_URL}`, //'http://127.0.0.1:3400/api/v1/request',
        data: request,
        headers: {
          'Authorization': `Bearer ${auth}`
        }
      });
      console.log(response);

      // Trying to take care of expired jwt token
      // if(response.message === "Network Error"){
      //   redirect(Applinks.Login.path);
      // }
  
      if(response.data.status === false ) throw new Error(response.data.message);
     
      alert(response.data.message);

      setConfirmRequest(response.data.data);

      redirect(Applinks.Request.path)

    }catch(error){
      console.log(error);
      alert(error.response.data.message);
    };
  };
  

  return(
    <>
      <Container>
          <div className="h-screen flex justify-center items-center">
            <div className="w-[80rem] px-3 mx-auto pt-[0rem]">
                <div className="flex justify-between gap-10 items-center ">
                  <div className="w-[50%] basis-[50%]">
                    <img src={homePic} className="rounded-xl" alt="" />
                  </div>
                  <div className="basis-[50%] text-center">
                    <h1 className="text-[2.5rem] font-semibold px-4">Payment for all request are made here, keep the receipt issued propertly.</h1>
                      <Button type="submit" className="border bg-orange-600 text-white mx-auto rounded py-2 mt-7 px-2 w-[30%]" btnText="Make A Request" onClick={handleShowReq}/>
                  </div>
                </div>
            </div>
          </div>
{/* 
          {isconfirmRequest ? <Card email={confirmRequest.email} matric={confirmRequest.matric_no} price={confirmRequest.price} type={confirmRequest.request_type} status={confirmRequest.request_status} /> : null} */}

         { showReq ? <div className=" flex justify-center items-center mb-[5rem] mt-[-3rem] ">
           <div className="border rounded-xl shadow-2xl px-[5rem] py-[3rem] mb-[5rem]">
              <div className="">
                  
                  <Label
                    className="text-[1rem]"
                    labelText="Request Type"
                  />

                  <Select className="border rounded py-2 mt-2 px-3 w-[100%] outline-none" name="request_type" value={request.request_type} onChange={handleRequestChange} selectText="Select Request Type">
                        <option value="transcript">Transcript</option>
                        <option value="transfer"> Transfer</option>
                        <option value="clearance"> Clearance</option>
                  </Select>

                  <Button
                  type="button"
                    className="border bg-orange-600 text-white rounded py-2 mt-5 px-3 w-[40%] text-center"
                  onClick={handleRequestClick}
                  btnText="Submit Request" 
                  />
              </div>
           </div>
         </div> : null}

      </Container>
    </>
  )
}

export default HomePage;