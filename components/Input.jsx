
const Input = ({ type, placeholder }) => {

  const handleOnChange = (event) => {
    onChange(event.target.value)
  }

  return (
    <div
     
    >
      <input
        style={{width:'95%',margin:'10px 0',border:'1px solid #ccc',borderRadius:'4px',padding:'12px'}}
        className="input-field"
        // onChange={handleOnChange}
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  )
}

export default Input