import { useRef } from "react"
import SendMessage from "../molecules/SendMessage"
import { useParams } from "react-router-dom"
import { socket } from "../Socket"

const SendBar = () => {

  const msg = useRef('')
  const { id } = useParams()
  const Send = (e) => {
    if(e.target[0].value == '') return
    socket.emit('send_message', id, e.target[0].value)
    e.target[0].value = ''
  }

  return (
    <div className='w-full'>
      <form onSubmit={(e) => {
        e.preventDefault()
        Send(e)
      }}>
        <SendMessage />
      </form>
    </div>
  )
}

export default SendBar