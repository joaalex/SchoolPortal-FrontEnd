const Footer = ()=>{
  return(
    <>
      <div className=" bg-gray-800 py-1">
        <div className="text-center text-white">
          <p className="text-[1.1rem] font-semibold">All Rigth Reserved</p>
        &copy;{(new Date().getFullYear())}
        </div>
      </div>
    </>
  )
};

export default Footer;