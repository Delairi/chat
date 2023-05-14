

const SendButton = ({text,Click}) => {
  return (
    <div className='p-2'>
        <button 
        onClick={()=>Click ? Click():''}
        >{text ? text:'Send'}</button>
    </div>
  )
}

export default SendButton