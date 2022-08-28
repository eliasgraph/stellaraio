import React from 'react'
import glowhalf from '../../assets/imgs/blog/Path 5 (1).png'



function BlogCardLg({blog}) {
  const pushToBlogDetail =()=>{
    window.location.href = `/blog/${blog.id}`
  }
  return (
    <>
    
      <div onClick={()=>pushToBlogDetail()} role={'button'} className="blog-card-lg">
        <div className="blog-card-lg-img">
          {blog && <img src={blog.acf.blog_img} alt="" />}
          
        </div>
        <div className="blog-card-lg-content">
          {blog && <h5>{blog ? blog.title.rendered : ''}</h5>}
          
          <p  className="app-color-primary">Author: Stellar AIO</p>
          <div className="blog-card-glow-half">
            <img src={glowhalf} alt="" />
          </div>
          
        </div>
      </div>
      
    </>
  )
}

export default BlogCardLg