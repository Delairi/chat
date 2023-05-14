import React from 'react'
import InputMessage from '../atoms/InputMessage'
import SendButton from '../atoms/SendButton'

const SendMessage = ({Change,Click}) => {
  return (
    <div className='flex flex-row w-full justify-between'>
        <InputMessage
        Change={(e)=>Change? Change(e):null}
         />
        <SendButton
        Click={()=>Click ? Click():''}
        />
    </div> 
  )
}

export default SendMessage