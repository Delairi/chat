import React from 'react'
import InputNormal from '../atoms/InputNormal'
import ButtonNormal from '../atoms/ButtonNormal'
import { socket } from '../Socket'

const FormRegister = ({type,text,placeholder,Submit}) => {

  

  return (
    <form
    onSubmit={(e)=>Submit(e)}
    className='flex flex-col sm:flex-row gap-5 sm:gap-2 h-auto w-full items-center justify-center'
    >
        <InputNormal
        placeholder={placeholder}
        />
        <ButtonNormal
        type={type}
        text={text}
        />
    </form>
  )
}

export default FormRegister