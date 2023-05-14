import React from 'react'

const ButtonNormal = ({text,Click,type}) => {
  return (
    <div>
        <button type={type ? type:'button'} onClick={()=>Click ?Click():''}>{text}</button>
    </div>
  )
}

export default ButtonNormal