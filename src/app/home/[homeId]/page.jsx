import React from 'react'

const homeId = async ({ params }) => {
  const { homeId } = await params
  const respons = await fetch(`https://jsonplaceholder.typicode.com/users/${homeId}`)
  const jsone = await respons.json()
  return (
    <div className=' border b order-2 bg-amber-600  px-9 w-xl py-10 text-center'>

      <h1> {jsone.name} { jsone.username } </h1> 
      
     <p> {jsone.email}</p>
     
    </div>
  )
}

export default homeId


