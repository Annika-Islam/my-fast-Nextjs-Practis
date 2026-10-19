import Link from 'next/link'
import React from 'react'

const Annu = ({datajabe}) => {
    const {id, name ,username} = datajabe
  return (
    <div className="card bg-base-100  shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>A card component has a figure, a body part, <br />
     and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <Link href={`/annika/${id}`}>
        <button className="btn btn-primary">Clink Me</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default Annu