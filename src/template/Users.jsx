import React from 'react'
import ActiveUsers from '../organisms/ActiveUsers'

const Users = () => {
  return (
    <div className='bg-[white] p-3 overflow-auto h-auto sm:h-[90vh] rounded-md'>
        <ActiveUsers/>
    </div>
  )
}

export default Users