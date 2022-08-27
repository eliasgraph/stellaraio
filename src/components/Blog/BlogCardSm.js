import React from 'react'
import glowsmhalf from '../../assets/imgs/blog/Path 6.png'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setOneBlog} from '../../store/actions'


function BlogCardSm({small, blog}) {
  const navigate = useNavigate()
  const pushToBlogDetail =()=>{
    navigate(`/blog/${blog.id}`)
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