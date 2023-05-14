import React from 'react'

const InputMessage = ({Change}) => {
  return (
        <input
          className='w-full p-1 rounded-lg'
          onChange={(e)=>Change ? Change(e):null}
        />
  )
}

export default InputMessage