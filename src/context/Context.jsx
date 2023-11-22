import { createContext, useContext, useState } from "react";

const SignupForm = createContext();
const SignupHandleChange = createContext();
const IsLoggedIn = createContext();
const SetIsLoggedIn = createContext();
const ConfirmRequest = createContext();
const SetConfirmRequest = createContext();


export const useSignupForm = ()=>{
  return useContext(SignupForm)
};

export const useSignupHandleChange = ()=>{
  return useContext(SignupHandleChange)
};

export const useIsLoggedIn = ()=>{
  return useContext(IsLoggedIn)
};

export const useSetIsLoggedIn = ()=>{
  return useContext(SetIsLoggedIn)
};

export const useConfirmRequest = ()=>{
  return useContext(ConfirmRequest);
};

export const useSetConfirmRequest = ()=>{
  return useContext(SetConfirmRequest);
};

const GlobalValues = ({children})=>{

  const [signupForm, setSignupForm] = useState({
    surname: "",
    othernames: "",
    gender:"",
    email: "",
    password: "",
    repeat_password:"",
    phone:"",
    dob:"",
    faculty:"",
    department:"",
    school:""
  });

  const [isLoggedIn, setIsLoggedIn]= useState(false)

  const handleOnChange = (e)=>{
    setSignupForm({...signupForm, [e.target.name]: e.target.value})
  };

  const [confirmRequest, setConfirmRequest] = useState({})
  
 


  return(
    <>
      <SignupForm.Provider value={signupForm}>
        <SignupHandleChange.Provider value={handleOnChange}>
          <IsLoggedIn.Provider value={isLoggedIn}>
            <SetIsLoggedIn.Provider value={setIsLoggedIn}>
              <ConfirmRequest.Provider value={confirmRequest}>
                <SetConfirmRequest.Provider value={setConfirmRequest}>
                  {children}
                </SetConfirmRequest.Provider>
              </ConfirmRequest.Provider>
            </SetIsLoggedIn.Provider>
          </IsLoggedIn.Provider>
        </SignupHandleChange.Provider>
      </SignupForm.Provider>
    </>
  )
};

export default GlobalValues;