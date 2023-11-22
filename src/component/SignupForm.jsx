// import { useState } from "react";
import Input from "./shared/Input";
import Label from "./shared/Label";
import Select from "./shared/Select";
import Button from "./shared/Button";
import { useSignupForm, useSignupHandleChange } from "../context/Context";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const SignupForm = ({onSubmit})=>{
  // const [signupForm, setSignupForm] = useState({
  //   surname: "",
  //   othernames: "",
  //   gender:"",
  //   email: "",
  //   phone:"",
  //   dob:"",
  //   faculty:"",
  //   department:"",
  //   school:""
  // })

  const signupForm = useSignupForm();
  const handleOnChange = useSignupHandleChange()
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword1, setShowPassword1] = useState(false)


 



  // const handleOnChange = (e)=>{
  //   setSignupForm({...signupForm, [e.target.name]: e.target.value})
    
  // };


  return(
    <>
        <div className="w-[50rem] py-10 mx-auto">
          <form action="" onSubmit={onSubmit} className="flex justify-between gap-10"> 
            <div className="basis-[50%]">
              <Label
              className="text-[1rem] pt-"
              labelText="Surname"
              />
              <Input
              type="text"
              value={signupForm.surname}
              name="surname"
              placeholder="Enter your surname"
              className="border rounded py-2 px-2 w-[100%] "
              onchange={handleOnChange}
              />

              <Label
              className="text-[1rem] "
              labelText="Gender"
              />
                <Select className="border rounded py-2 px-2 w-[100%]" name="gender" value={signupForm.gender} onChange={handleOnChange} selectText="Select Gender">
                  <option value="male">Male</option>
                  <option value="female"> Female</option>
              </Select>

              <Label
              className="text-[1rem]"
              labelText="Password"
              />
              <div className="flex items-center relative ">
                <Input
                type={showPassword ? "text" : "password"}
                value={signupForm.password}
                name="password"
                placeholder="Enter Password"
                className="border rounded rounde py-2 px-2 w-[100%] "
                onchange={handleOnChange}
                />
                <div className="absolute right-3 cursor-pointer">
                  {showPassword ? (<div onClick={()=> setShowPassword(!showPassword)}><IoIosEye/></div>) : (<div onClick={()=> setShowPassword(!showPassword)}><IoIosEyeOff/></div>)}
                </div>
              </div>

              <Label
              className="text-[1rem]"
              labelText="Phone Number"
              />
              <Input
              type="text"
              value={signupForm.phone}
              name="phone"
              placeholder="Enter your Phone Number"
              className="border rounded rounde py-2 px-2 w-[100%] "
              onchange={handleOnChange}
              />

              <Label
              className="text-[1rem] "
              labelText="Faculty"
              />

              <Select className="border rounded py-2 px-2 w-[100%]" name="faculty" value={signupForm.faculty} onChange={handleOnChange} selectText="Select Faculty">
                  <option value="science">Science</option>
                  <option value="art"> Art</option>
              </Select>

              <Label
              className="text-[1rem] "
              labelText="School"
              />

              <Select className="border rounded py-2 px-2 w-[100%]" name="school" value={signupForm.school} onChange={handleOnChange} selectText="Select School">
                  <option value="science">Science</option>
                  <option value="art"> Art</option>
              </Select>
              
            </div>
            <div className="basis-[50%]">
              <Label
              className="text-[1rem]"
              labelText="Othernames"
              />
              <Input
              type="text"
              value={signupForm.othernames}
              name="othernames"
              placeholder="Enter your othernames"
              className="border rounded rounde py-2 px-2 w-[100%] "
              onchange={handleOnChange}
              />

              <Label
              className="text-[1rem]"
              labelText="Date Of Birth"
              />
              <Input
              type="date"
              value={signupForm.dob}
              name="dob"
              placeholder="Enter your Date Of Birth"
              className="border rounded rounde py-2 px-2 w-[100%] "
              onchange={handleOnChange}
              />

              
              <Label
              className="text-[1rem]"
              labelText="Repeat Password"
              />
              <div className="flex relative items-center">
                <Input
                type={showPassword1 ? "text" : "password"}
                value={signupForm.repeat_password}
                name="repeat_password"
                placeholder="Enter Repeat Password"
                className="border rounded rounde py-2 px-2 w-[100%] "
                onchange={handleOnChange}
                />
                <div className="absolute right-3 cursor-pointer">
                 {showPassword1 ? 
                 (<div onClick={()=>setShowPassword1(!showPassword1)} >
                  <IoIosEye/> 
                  </div>) : (<div onClick={()=> setShowPassword1(!showPassword1)}><IoIosEyeOff/></div>)}
                </div> 
              </div>
              <Label
              className="text-[1rem]"
              labelText="Email"
              />
              <Input
              type="email"
              value={signupForm.email}
              name="email"
              placeholder="Enter your Email"
              className="border rounded rounde py-2 px-2 w-[100%] "
              onchange={handleOnChange}
              />

              <Label
              className="text-[1rem] "
              labelText="Department"
              />

              <Select className="border rounded py-2 px-2 w-[100%]" name="department" onChange={handleOnChange} value={signupForm.department} selectText="Select Department">
                  <option value="computer engineering">Computer Engineering</option>
                  <option value="art and craft"> Art and Craft</option>
              </Select>
              <div className="flex justify-between mt-2">
                <h1>Already a Student? <Link  className="text-orange-600" to="/auth/login">Log in</Link></h1>
             <Button type="submit" className="border  bg-orange-600 text-white rounded py-2  px-2 w-[30%]" btnText="Submit"/></div>
            </div>
            
          </form>
        </div>
    </>
  )
}
export default SignupForm;