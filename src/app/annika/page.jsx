import React from 'react'
import Annu from '../components/Annu'

const AnnikaPage =async () => {
    const respn = await fetch ('https://jsonplaceholder.typicode.com/users')
    const miandata = await respn.json()
  return (
    <div className='grid grid-cols-3 mt-5 gap-3.5'>

        {
            miandata.map (maindt => <Annu
            key={maindt.id}
            datajabe={maindt}
            
            ></Annu>)
        }
    </div>
  )
}

export default AnnikaPage