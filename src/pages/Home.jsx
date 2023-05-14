import { useNavigate } from "react-router-dom"
import BarMessage from "../template/BarMessage"
import BoxMessages from "../template/BoxMessages"
import Conversation from "../template/Conversation"
import { socket } from "../Socket"
import { useDispatch, useSelector } from "react-redux"

const Home = () => {

  const navigate = useNavigate()

  const mySocket = useSelector(state => state.users)
  socket.on('connect', () => {
    window.location.href = '/'
  })

  return (
    <div className='h-screen'>
      <div className='m-5 cursor-pointer'>
        <p onClick={() => {
          navigate({
            pathname: `/`,
          })
        }}>Return</p>
      </div>

      <div className='flex flex-col sm:flex-row gap-5 m-5'>
        <BoxMessages />
        <div className='flex flex-col justify-center gap-5 grow'>
          <Conversation />
          <BarMessage />
        </div>
      </div>
    </div>
  )
}

export default Home