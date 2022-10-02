import React from 'react'

function Posts({posts}) {
  const pushToBlogDetail =(post)=>{
    window.location.href = `/blog/${post.acf.url}`
  }
  return (
    <>
      {posts.length && posts.map((post, key)=>(
        <div role={'button'} onClick={()=>{pushToBlogDetail(post)}} key={key} className="side-posts mb-20px">
        <h6>{post.title.rendered}</h6>
        <p className='mb-0'>Author: {post.acf.publisher}</p>
      </div>
      ))}
    </>
  )
}

export default Posts