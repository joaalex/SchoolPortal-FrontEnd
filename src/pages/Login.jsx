
import loginPhoto from "../assets/Screenshot 2023-11-06 at 4.17.45 PM.png"
import Label from "../component/shared/Label";
import Input from "../component/shared/Input";
import Button from "../component/shared/Button";
import requesti from "../../src/assets/requestii.svg"
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Applinks } from "../utils/Linkings";
import { useSetIsLoggedIn } from "../context/Context";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Login = ()=>{

  const redirect = useNavigate();
  const setIsLogged = useSetIsLoggedIn();
  


  const [showPassword, setShowPassword] = useState(false);
  const [loginData , setLoginData] = useState({
    email:"",
    password:""
  });

  const handleLoginChange = (e)=>{
    
    setLoginData({...loginData, [e.target.name]: e.target.value});
    
  };

  

  const handleLogin = async (e)=>{
    e.preventDefault();
   try{
    const response = await axios({
      method:"post",
      url:"http://127.0.0.1:3400/api/v1/auth/login",
      data: loginData
    })
    
    if(response.data.status === false) throw new Error(response.data.message);
    
    const student_info = response.data.data;
    localStorage.setItem("student_info", JSON.stringify(student_info));
   
    setIsLogged(true);

    localStorage.setItem('token', response.data.token);
    
    alert(response.data.message);
    redirect(Applinks.Home.path);

   }catch(error){
    console.log(error)
    alert(error.response.data.message)

   }
  }

  return(
    <>
        <div className=" h-screen flex items-center justify-center ">
          <div className="w-[80rem] mx-auto ">
            <div className="flex justify-around shadow-2xl border rounded-xl p-5 items-center ">
              <div className="w-[40%] drop-shadow-xl  basis-[45%]">
                <img src={loginPhoto} className="rounded-xl" alt="" />
              </div>
              <div className=" p-[7rem] basis-[50%]">

                  <div className="w-[10%] mx-auto my-2">
                    <img src={requesti} className="" alt="" />
                  </div>
                  <h1 className="text-center text-[2rem] font-semibold mb-7">Login</h1>
                <form action="" onSubmit={handleLogin}>
                  
                  <Label
                  className="text-[1rem]"
                  labelText="Email"
                  />
                  <Input
                  type="email"
                  value={loginData.email}
                  name="email"
                  placeholder="Enter your Email"
                  className="border outline-none rounded rounde mb-5 py-2 px-2 w-[100%] "
                  onchange={handleLoginChange}
                  />

                  <Label
                  className="text-[1rem]"
                  labelText="Password"
                  />
                  <div className="flex relative items-center">
                      <Input
                      type={showPassword ? "text" : "password"}
                      value={loginData.password}
                      name="password"
                      placeholder="Enter Password"
                      className="border outline-none rounded rounde py-2 px-2 w-[100%] "
                      onchange={handleLoginChange}
                      />
                    <div className="absolute cursor-pointer right-3">
                      {showPassword ? (<div onClick={() => setShowPassword(!showPassword)} ><IoIosEye/></div>) : (<div onClick={() => setShowPassword(!showPassword)}><IoIosEyeOff/></div> )}
                    </div>
                  </div> 

                  <div>
                    <div className="flex justify-between text-[.9rem] pt-2">
                    <p> <Link className=" text-orange-600" to="/signup">Sign up</Link> To Become A Student </p>
                     <Link className=" text-orange-600" to=""><p>   Forget Password</p></Link>

                    </div>
                  </div>
                  
                  <Button type="submit" className="border bg-orange-600 text-white float-right rounded py-2 mt-7 px-2 w-[30%]" btnText="Login"/>
                  
                </form>
              </div>

            </div>
          </div>
        </div>
    </>
  )
};

export default Login;