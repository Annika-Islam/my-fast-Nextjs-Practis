import Link from 'next/link'
import React from 'react'

const HomeData = ({datajabe }) => {
    const {id, name, eamil, } = datajabe 
  return (
   <div className="card bg-base-100 shadow-sm">
  <div className="card-body">
    
    <h2 className="card-title">Card title!</h2>
    <p> {name} </p>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      
      <Link href={`/home/${id}`}>
      <button className="btn btn-primary">Buy Now</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default HomeData