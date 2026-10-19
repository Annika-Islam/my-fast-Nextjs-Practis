import Link from 'next/link'
import React from 'react'

const Contact = ({ datago}) => {
    const {id,title,body}=  datago
  return (
   <div className="card bg-primary text-primary-content ">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
     <Link  href={`/contact/${id}`}>
      <button className="btn">Buy Now</button>
     </Link>
    </div>
  </div>
</div>
  )
}

export default Contact