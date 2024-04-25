import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const {userid} = useParams()
    // const [data,setData]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/chhotu-code')
    //     .then((res)=> res.json())
    //     .then((data) => setData(data))
    // },[])
  return (
    <div className=' bg-gray-950 text-white text-3xl font-semibold p-5 rounded-md'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="github photo"  width={300} height={300} className=' rounded-full'/>
      
    </div>
  )
}

export default Github
export const githubdata = async () =>{
   const responce = await fetch('https://api.github.com/users/chhotu-code')
    return responce.json()
}
