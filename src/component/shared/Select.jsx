const Select = ({className, onChange, selectText, name, value, id, children})=>{
  return(
    <>
      <select className={className} onChange={onChange} name={name} value={value} id={id}   >
      <option value="" className="text-grey">{selectText}</option>
      {children}
      </select>
    </>
  )
}

export default Select