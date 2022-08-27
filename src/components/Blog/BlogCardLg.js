import React from 'react'
import {useNavigate} from 'react-router-dom'
import glowhalf from '../../assets/imgs/blog/Path 5 (1).png'
import {useDispatch} from 'react-redux'
import {setOneBlog} from '../../store/actions'


function BlogCardLg({blog}) {
  const navigate = useNavigate()
  const pushToBlogDetail =()=>{
    navigate(`/blog/${blog.id}`)
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