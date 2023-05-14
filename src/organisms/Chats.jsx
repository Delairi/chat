import { useEffect, useState } from "react"
import Chat from "../molecules/Chat"
import { useNavigate, useParams } from "react-router-dom"
import { socket } from "../Socket"
import { useSelector } from "react-redux"

const Chats = () => {

    const { id } = useParams()
    const [USERS, setUSERS] = useState([])
    const [LAST, setLAST] = useState('')
    const navigate = useNavigate()
    const TOTAL_USERS = useSelector(state => state.users)
    useEffect(() => {
        socket.emit('start_chat', id)

        socket.emit('my_messages', socket.id, id)
        socket.on('my_messages', (users) => {

            const union = TOTAL_USERS.users.filter(item => users.includes(item.username))
            
            setUSERS(union)
        })


    }, [id])

    return (
        <div className='flex flex-row sm:flex-col justify-start items-center gap-8 w-auto md:w-auto h-auto sm:h-[80vh] rounded-lg'>

            {
                USERS.map((item, index) => {
                    if (item !== undefined) {
                        if (item == id) {
                            return <Chat
                                Click={(user) => {
                                    navigate({
                                        pathname: `/chat/${user}`,
                                    })

                                }}
                                key={index}
                                withStatus={true}
                                user={item.username}
                                img={item.img}
                                chat={LAST != null ? LAST : 'No messages'}
                                is={true}
                            />
                        } else {
                            return <Chat
                                Click={(user) => {
                                    navigate({
                                        pathname: `/chat/${user}`,
                                    })

                                }}
                                key={index}
                                withStatus={true}
                                user={item.username}
                                img={item.img}
                                chat={LAST != null ? LAST : 'No messages'}
                                is={false}
                            />
                        }

                    }

                })
            }
        </div>
    )
}

export default Chats