import React from 'react'
import Users from '../template/Users'
import Intro from '../template/Intro'
import axios from 'axios'
import { socket } from '../Socket'
import { useDispatch, useSelector } from 'react-redux'
import { saveSocket, saveUsers } from '../redux/counters/UserSlice'
import { useNavigate } from 'react-router-dom'

const In = () => {

 
  return (
    <div className='flex flex-col sm:flex-row gap-5 m-5 h-screen'>
      <Users />
      <Intro />
    </div>
  )
}

export default In