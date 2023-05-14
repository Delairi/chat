import { useEffect, useState } from "react"
import { TextMessage } from "../atoms/TextMessage"

const Messages = ({ message,main,timestamp }) => {

  const [Direction, setDirection] = useState('')

  useEffect(() => {
    if(main) setDirection('items-start justify-start')
    if(!main) setDirection('items-end justify-end')

  }, [])
  

  return (
    <div className={`flex flex-row gap-5 w-full ${Direction} pb-1`}>
      
      <div className='flex flex-col gap-2'>
        <TextMessage
              msg={message}
              hour={timestamp}
            />

      </div>
    </div>
  )
}

export default Messages