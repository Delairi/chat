
const InputNormal = ({placeholder,Change}) => {
  return (
    <input
        placeholder={placeholder}
        maxLength='10'
        onChange={Change ? Change() : null}
        className='shadow-md rounded-md p-2 w-64 h-10'
    />
  )
}

export default InputNormal