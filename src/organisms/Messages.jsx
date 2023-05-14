import { useEffect } from 'react'
import Message from '../molecules/Message'
import { socket } from '../Socket'
import { useState } from 'react'
import GetHour from '../utils/GetHour'
import { useParams } from 'react-router-dom'

const Messages = () => {

  const [Msgs, setMsgs] = useState([])
  useEffect(() => {

    socket.on('messages', data => {
     const chat = data.chat.map((item,index)=>{
        if(item.main == socket.id){
          return {
            message:item.message,
            local:true,
            timestamp:item.timestamp
          }
        }else{
          return {
            message:item.message,
            local:false,
            timestamp:item.timestamp
          }
        }
      })

      setMsgs(chat)
      
  })

  },[])

 

  return (
    <div className='w-full h-[55vh] sm:h-[70vh] flex flex-col gap-2 '>

    {
      Msgs.map((item,index)=>{
        return <Message
        key={index}
        message={item.message}
        main={item.local}
        timestamp={GetHour(item.timestamp)}
      />

      })
    }

    </div>
  )
}

export default Messages