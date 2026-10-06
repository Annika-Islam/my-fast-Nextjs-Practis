import React from 'react'

const daisy = ({datareceve}) => {

  const {name, email} = datareceve
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{name} </h2>
    <p> {email} </p>
    <p>this is a new componet </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default daisy