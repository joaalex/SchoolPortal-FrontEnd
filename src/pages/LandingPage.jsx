// import landing from '../assets/'

// import { useEffect } from "react";
import Container from "../component/Container";
import { useSetIsLoggedIn } from "../context/Context";

const LandingPage = ()=>{

  const setIsLoggedIn = useSetIsLoggedIn();

  setIsLoggedIn(false);

  // const isLogged = ()=>{
  //   setIsLoggedIn(true)
  // }

  // // useEffect(()=>{

  // //   isLogged();
  // // },[]);
    
  return(
    <>
      <Container>
        <div className="bg-slate-500 h-screen">
          <div className="bg-landingBanner bg-cover bg-no-repeat h-screen">
              <div className="w-[80rem] pt-[10rem]  mx-auto">
                <div className="flex justify-between gap-[10rem] text-black">
                  <div className=" ">
                    <h1 className="text-[2.5rem]  py-10 text-white font-semibold ">
                      Our help desk provides comprehensive step by step guide to resolving all service <span className="text-orange-400">complaints and enquiries</span> 
                    </h1>
                    <h2 className="text-[2.5rem] text-orange-600 font-semibold border-e-8 border-e-teal-700 py-2 px-3 w-[20%] border">
                      Explore
                    </h2>
                    
                  </div>

                  <div className=" rounded-xl px-[10rem] py-[10rem]">

                  </div>
                  

                </div>
                
              </div>
          </div>
        </div>
      </Container>
    </>
  )
};
export default LandingPage


// Yabatech is pleased  to introduce Parents/Guardian portal that enable parents or guardians to access results and Academic profile of their wards.