import React from 'react'

const ContactDyPage =async ({params}) => {
    const {contactID} = await params ;
    const FinalData = await fetch( `https://jsonplaceholder.typicode.com/posts/${contactID}`)
    const result = await FinalData.json();
  return (
    <div className=' bg-amber-400 text-2xl w-xl p-6 text-black'>
       <h1 className='font-extrabold'> Name : {result.title} </h1>
       <h1> body: {result.body} </h1>

    </div>
  )
}

export default ContactDyPage




