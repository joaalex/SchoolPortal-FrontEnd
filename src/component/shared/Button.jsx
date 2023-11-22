const Button = ({type, className ,onClick,  btnText})=>{
  return(
    <>
      <button  type={type} onClick={onClick} className={className}>{btnText}</button>
      
    </>
  )
};

export default Button;