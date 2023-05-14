
const StartMessageButton = ({text,Click}) => {
  return (
    <div>
        <button
        onClick={()=>Click()}
        >{text ? text:'Chat'}</button>
    </div>
  )
}

export default StartMessageButton