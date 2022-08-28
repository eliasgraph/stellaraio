import React from 'react'
import glowsmhalf from '../../assets/imgs/blog/Path 6.png'

function BlogCardSm({small, blog}) {
 
  const pushToBlogDetail =()=>{
    window.location.href = `/blog/${blog.id}`
  }
  return (
    <>
    <div onClick={pushToBlogDetail} role={'button'} className="blog-card-sm">
      <div className={`blog-card-sm-img ${small ? "blog-card-sm-img-small" : ""}`}>
        <img  src={blog ? blog.acf.blog_img : ''} alt="" />
      </div>
      <div className={`blog-card-sm-content ${small ? "blog-card-sm-content-small" : ""}`}>
        <h6>{blog ? blog.title.rendered : ''}</h6>
        <p className='mb-0'>Author: Stellar AIO</p>
        <div className="blog-card-glow-halfsm">
          <img src={glowsmhalf} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default BlogCardSm