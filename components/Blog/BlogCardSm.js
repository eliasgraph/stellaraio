import React from 'react'
import glowsmhalf from '../../assets/imgs/blog/Path 6.png'
import { useRouter } from 'next/router'

function BlogCardSm({small, landing, blog}) {
  const router = useRouter()
  const pushToBlogDetail =()=>{
    router.push(`/blog/${blog.acf.url}`)
    
  }
  return (
    <>
    <div onClick={pushToBlogDetail} role={'button'} className="blog-card-sm">
      <div className={`blog-card-sm-img ${small ? "blog-card-sm-img-small" : ""} ${landing ? "blog-card-sm-img-landing" : ""}`}>
        <img  src={blog ? blog.acf.blog_img : ''} alt="" />
      </div>
      <div className={`blog-card-sm-content ${small ? "blog-card-sm-content-small" : ""} ${landing ? "blog-card-sm-content-landing" : ""}`}>
        <h3 dangerouslySetInnerHTML={{__html: blog.title.rendered}} ></h3>
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