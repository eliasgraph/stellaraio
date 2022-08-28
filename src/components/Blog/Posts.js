import React from 'react'

function Posts({posts}) {
  
  return (
    <>
      {posts.length && posts.map((post, key)=>(
        <div key={key} className="side-posts mb-20px">
        <h6>{post.title.rendered}</h6>
        <p className='mb-0'>Author: {post.acf.publisher}</p>
      </div>
      ))}
    </>
  )
}

export default Posts