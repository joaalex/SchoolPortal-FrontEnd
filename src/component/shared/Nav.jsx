import request from '../../assets/request.svg'
import { Link } from 'react-router-dom';
import { Applinks } from '../../utils/Linkings';
import { useIsLoggedIn } from '../../context/Context';
// import { useState } from 'react';


const Nav = ()=>{

  const isloggedin = useIsLoggedIn()
  const studentInfo = JSON.parse(localStorage.getItem('student_info'))

  // const [isloggedin, setIsLoggedIn] = useState(true)

  return(

    <>
      <div className='bg-orange-700 fixed  w-[100%] top-0 text-white px-[15rem] py-3'>
        {
          !isloggedin ? <div className='flex justify-between items-center'>
          <Link to="/home">
            <div>
              <img src={request} className='w-[10%]' alt="" />
            </div>
          </Link>

          <div className=''>
            <ul className='flex gap-[3rem] justify-around text-[1rem] '>
              <Link to={Applinks.Login.path} ><li>Login</li></Link>
              <Link to={Applinks.Signup.path}><li>Signup</li></Link>
              
            </ul>
          </div>
        </div> : <div className='flex justify-between items-center'>
          <Link>
            <div>
              <img src={request} className='w-[10%]' alt="" />
            </div>
          </Link>
          <div className=''>
            <ul className='flex gap-[3rem] text-[1rem] justify-around'>
              <Link to={Applinks.Home.path} ><li>Home</li></Link>
              <Link to={Applinks.Request.path}><li>Request</li></Link>
              <Link to={Applinks.Profile.path}>{studentInfo.matric_no}</Link>
              
            </ul>
          </div>
        </div>
        }
      </div>
    </>
  )
}

export default Nav;
