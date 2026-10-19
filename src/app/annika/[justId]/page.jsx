import React from 'react'

const JustPagearDynamik = async({params}) => {
    const {justId}= await params
    const res = await fetch (`https://jsonplaceholder.typicode.com/users/${justId}`);
    const user = await res.json()
  return (
    <div className='bg-blue-500 w-xl p-5'>

        <h1>{user.name}</h1>
        <h1 className='font-bold text-3xl'>My name is annika akter </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit animi fugiat ipsum at cumque quisquam fugit qui modi deserunt totam doloribus vel, beatae recusandae temporibus quod facere, corporis sit mollitia.</p>
        <button className=' py-2.5 px-6 mt-5 rounded-3xl text-stone-950 border-2'> Show now</button>
    </div>
  )
}

export default JustPagearDynamik


