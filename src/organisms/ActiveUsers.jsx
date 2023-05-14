import { socket } from '../Socket'
import ButtonNormal from '../atoms/ButtonNormal'
import { Span } from '../atoms/Texts'
import ActiveUser from '../molecules/ActiveUser'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveUsers } from '../redux/counters/UserSlice'
const ActiveUsers = () => {

  const TOTAL_USERS = useSelector(state => state.users)
  const dispatch = useDispatch()
  
  useEffect(() => {


      socket.on('get_users_active', (data) => {
        dispatch(saveUsers(data))
      })


  }, [])


  const [Active, setActive] = useState(false)

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-row gap-5 sm:hidden justify-end '>
        <Span
          text={'Active users 100'}
        />
        <ButtonNormal
          text={'Show'}
          Click={() => {
            setActive(!Active)
          }}
        />
      </div>
      <div className={`${!Active ? 'hidden' : 'flex'} sm:flex flex-col gap-5`}>
        {
          TOTAL_USERS.users.map((item, index) => {
            if(item.id != socket.id) return <ActiveUser key={item.id} img={item.img} username={item.username} />
            
          })
        }
      </div>

    </div>
  )
}

export default ActiveUsers