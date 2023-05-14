
export const UserImg = ({img,withStatus}) => {

    return (
        <div>
        <div className='w-[60px] h-[60px] relative'>
            <img 
            className='w-[60px] h-[60px] rounded-full'
            src={img} />
            {withStatus && <div className='w-[15px] h-[15px] bg-[blue] rounded-full absolute right-0 bottom-0 border-2 border-white'></div>}
            
        </div>
        </div>
    )

}


export const PrevChat = ({user,chat}) => {

    return (
        <div className='flex flex-col'>
                <p>{user}</p>
                <span>{chat}</span>
        </div>

    )


}

export  const Hour = ({hour,cantidad,showCantidad}) => {

    return (
        <div className='h-full flex flex-col justify-start items-center'>
            <span>{hour}</span>
        </div>
    )

}

