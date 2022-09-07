import React from 'react'
import glowsmhalf from '../../assets/imgs/blog/Path 6.png'
import { useDispatch } from 'react-redux'
import {setOneBlog} from '../../store/actions'

function BlogCardSm({small, blog}) {
 
  const dispatch = useDispatch()
  const pushToBlogDetail =()=>{
    dispatch(setOneBlog(blog))
    setTimeout(()=>{
      window.location.href = `/blog/${blog.acf.url}`
    },500)
  }
  return (
    <>
    <div onClick={pushToBlogDetail} role={'button'} className="blog-card-sm">
      <div className={`blog-card-sm-img ${small ? "blog-card-sm-img-small" : ""}`}>
        <img  src={blog ? blog.acf.blog_img : ''} alt="" />
      </div>
      <div className={`blog-card-sm-content ${small ? "blog-card-sm-content-small" : ""}`}>
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