import React from 'react'
import Contact from '../components/Contact';

const ContactPage = async() => {
    const responsib = await fetch(" https://jsonplaceholder.typicode.com/posts")
    const datas = await responsib.json();
  return (
    <div className=' grid grid-cols-3 gap-3 mt-7'>
        {
            datas.map ( data => <Contact
            key={data.id}
            datago= {data}
            ></Contact>)
        }

    </div>
  )
}

export default ContactPage