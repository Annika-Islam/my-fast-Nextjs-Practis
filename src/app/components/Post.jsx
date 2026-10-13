 
import React from 'react'

const Post = ({datajabe}) => {
    const {description, category,author} = datajabe
  return (
    <div className="card bg-gradient-to-br from-violet-100 via-white to-blue-100 shadow-lg border border-violet-200 hover:shadow-2xl hover:border-purple-400 transition-all duration-300 rounded-2xl">
  <div className="card-body">
    <h2 className="card-title text-violet-700">Card title!</h2>
    <h1 className="text-blue-700 font-semibold"> {author} </h1>
    <h3 className="text-purple-600 font-medium"> {category} </h3>
    <p className="text-gray-700"> {description} </p>
    <div className="card-actions justify-end">
      <button className="btn bg-gradient-to-r from-violet-600 to-blue-600 text-white border-none hover:from-violet-700 hover:to-blue-700 rounded-xl">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Post
