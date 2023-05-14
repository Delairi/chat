import { Hour, PrevChat, UserImg } from "../atoms/Profile"

const Chat = ({withStatus,user,chat,hour,cantidad,img,Click,is}) => {


    const bg = is ? 'bg-[#F3F4F6]' : 'bg-white'


    return (
        <div className={`flex flex-row gap-2 items-center cursor-pointer ${bg} p-2 pl-4 pr-4`} onClick={()=> Click ? Click(user):''}>
            <div className='sm:hidden md:block'>
            <UserImg
                withStatus={withStatus}
                img={img}
            />
            </div>
            <div className='hidden sm:flex flex-row gap-4 md:gap-10' >
                
                    <PrevChat
                    chat={chat}
                    user={user}
                    />
                    <Hour
                    cantidad={cantidad}
                    showCantidad={true}
                    hour={hour}
                    />
            </div>
        </div>
    )
}

export default Chat