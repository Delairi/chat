import React from 'react'

function GetHour(timestamp) {
  
    const date = new Date(timestamp)
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const hour12 = hour % 12
    const hourStr = hour12 < 10 ? '0' + hour12 : hour12
    const minutesStr = minutes < 10 ? '0' + minutes : minutes
    const strTime = hourStr + ':' + minutesStr + ' ' + ampm
    return strTime

}

export default GetHour