export const Title = ({title}) => {

    return (
        <h1
            className='text-3xl sm:text-4xl md:text-6xl font-bold text-[#1E1E1E] break-all'
        >{title}</h1>
    )

}

export const Text = ({text}) => {
    return (
        <p className='text-[#1E1E1E] text-xl break-all'>{text}</p>
    )
}
export const Span = ({text}) => {
    return (
        <p className='text-[#1E1E1E] text-md break-all'>{text}</p>
    )
}