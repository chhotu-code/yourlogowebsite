import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
const data = useParams()
  return (
    <div className=' bg-gray-950 p-5  text-white text-3xl'>
        User: {data.userid}
        
    </div>
  )
}

export default User
