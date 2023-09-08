import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubinfoloader = async () => {
    const response = await fetch('https://api.github.com/users/Aadiii01')
    return response.json()
}