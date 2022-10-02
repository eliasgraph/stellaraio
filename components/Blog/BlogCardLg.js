import React from 'react'
import glowhalf from '../../assets/imgs/blog/Path 5 (1).png'
import {useRouter} from 'next/router'

function BlogCardLg({blog}) {
  const router = useRouter()
  const pushToBlogDetail =()=>{
    router.push(`/blog/${blog.acf.url}`)
  }
  return (
    <>
    
      <div onClick={()=>pushToBlogDetail()} role={'button'} className="blog-card-lg">
        <div className="blog-card-lg-img">
          {blog && <img src={blog.acf.blog_img} alt="" />}
          
        </div>
        <div className="blog-card-lg-content">
          {blog && <h1 dangerouslySetInnerHTML={{__html: blog.title.rendered}} ></h1>}
          
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