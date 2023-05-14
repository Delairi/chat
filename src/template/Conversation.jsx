import React from 'react'
import Messages from '../organisms/Messages'

const Conversation = () => {
  return (
    <div className='bg-[white] p-5 flex grow rounded-lg overflow-auto'>
        <Messages/>
    </div>
  )
}

export default Conversation