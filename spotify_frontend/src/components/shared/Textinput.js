const TextInput = ({ label, placeholder, type = "text", className,value, labelColor, setValue}) => { 
    return (
      <div className={`textInputDiv w-full flex flex-col space-y-1  ${className}`}> 
        <label htmlFor={label} className={`font-semibold ${labelColor}`}>{label}</label> 
        <input 
          type={type} 
          id={label} 
          placeholder={placeholder} 
          value = {value}
          onChange={(e)=>{
            setValue(e.target.value);
          }}
          className="border border-gray-500 rounded w-full p-3 placeholder-gray-600" 
        /> 
      </div>
    );
  };
  
  export default TextInput;