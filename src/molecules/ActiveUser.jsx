import { useSelector } from "react-redux"
import { socket } from "../Socket"
import { PrevChat, UserImg } from "../atoms/Profile"
import StartMessageButton from "../atoms/StartMessageButton"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
const ActiveUser = ({ username,img }) => {

    const navigate = useNavigate()
    const selector = useSelector(state => state.users.username)
    const [User_, setUser_] = useState('')
    useEffect(() => {
      
            setUser_(selector)

    }, [selector])
    

    return (
        <div className='flex flex-row items-start h-[70px] w-auto p-1 gap-3'>
            <div>
                <UserImg img={img} />
            </div>
            <div>
                <PrevChat
                    user={username}
                />
            </div>
            <div className={`items-center justify-center h-full ${User_ == '' ? 'hidden':'flex'}`}>
                <StartMessageButton
                    Click={() => {

                        navigate({
                            pathname: `/chat/${username}`,
                        })
                    }}
                />
            </div>

        </div>
    )
}

export default ActiveUser