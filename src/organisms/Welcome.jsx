import { Text, Title } from "../atoms/Texts"

const Welcome = () => {

    return (
        <div className='flex flex-col gap-2 items-center'>
            <Title
                title={"Delairi's chat app"}
            />
            <Text
                text={'register and try it'}
            />

        </div>
    )

}

export default Welcome