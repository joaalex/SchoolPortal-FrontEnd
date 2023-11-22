const Input = ({ onchange, id, className, type, value, name, placeholder})=>{
  return(
    <>
    <input className={className} onChange={onchange} placeholder={placeholder} id={id} type={type} value={value} name={name} required/>
    </>
  )
}
export default Input;