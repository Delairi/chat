import { useEffect, useState } from "react";
import { socket } from "../Socket";
import FormRegister from "../molecules/FormRegister"
import Welcome from "./Welcome"
import { Title } from "../atoms/Texts";
import { saveUsername, saveUsers } from "../redux/counters/UserSlice";
import { useDispatch, useSelector } from "react-redux";

const Presentation = () => {

    const [Username, setUsername] = useState('')
    const [Error, setError] = useState(false)
    const dispatch = useDispatch()
    const selector = useSelector(state=> state.users.username)
    const Submit = (e) => {
        e.preventDefault();
        socket.emit('post_user', e.target[0].value)
        socket.on('post_user', (data) => {
            if (data) {
                dispatch(saveUsername(e.target[0].value))
                setUsername(e.target[0].value)
                setError(false)
            } else {
                setError(true)
            }



        })
    }

    useEffect(() => {
        if(selector != '') setUsername(selector)
    }, [selector])
    

    return (
        <div className='flex flex-col gap-5 justify-center items-center w-full h-full'>
            {
                Error ? <div className='text-[red]'>Username already taken</div> : null
            }
            {
                Username ? <div>
                    <Title title={`Welcome ${Username}`} />
                </div> :
                    <div className='flex flex-col gap-10'>
                        <Welcome />
                        <FormRegister
                            placeholder={'Username'}
                            text={'Get in'}
                            type={'submit'}
                            Submit={(e) => Submit(e)}
                        />
                    </div>
            }

        </div>
    )
}

export default Presentation