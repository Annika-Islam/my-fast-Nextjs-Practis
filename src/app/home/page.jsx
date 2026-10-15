import React from 'react'
import HomeData from '../components/HomeData'
import Image from 'next/image'

const HomePage =async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const datas = await res.json()
  return (
    <div className='grid grid-cols-3 gap-3 mt-6 mb-7'>
         {
            datas.map ( data => <HomeData
            key={data.id}
            datajabe ={data}
            
            ></HomeData>)
         }
         <Image 
          src="/batarflay.avif"
        width={300}
        height={400}
        alt="butterfly"
         ></Image>
    </div>
  )
}

export default HomePage