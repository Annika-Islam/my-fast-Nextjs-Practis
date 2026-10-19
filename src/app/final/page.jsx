import React from 'react'
import Final from '../components/FinalCrd'

const FinalPage =async () => { 
    const res = await fetch ('https://jsonplaceholder.typicode.com/users')
    const varname =await res.json()
  return (
    <div className='grid grid-cols-3 gap-3.5 mt-6'>
        {
            varname.map(vares => <Final 
             key={vares.id}
             datajabe = {vares}
            
            ></Final>)
        }
    </div>
  )
}

export default FinalPage 