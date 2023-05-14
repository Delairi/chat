export const TextMessage = ({msg,hour}) => {

    return (
        
            <div className='flex flex-row gap-2 items-center bg-azul p-3 rounded-lg'>
                <p className='break-all break hyphens-auto'>{msg}</p>
                <p className='text-[.7em] relative top-2 left-2 break'>{hour}</p>
            </div>
        
    )

}