import React,{ useState, useEffect  }  from 'react'
import {Row, Col } from 'reactstrap'

import Buttons from '../../components/Generals/Buttons'
import Search from '../../assets/svgs/Search'
import Star from '../../assets/svgs/Star'
import BlogCardLg from '../../components/Blog/BlogCardLg'
import BlogCardSm from '../../components/Blog/BlogCardSm'

import glowhalf from '../../assets/imgs/blog/Path 5 (1).png'
import glowmd from '../../assets/imgs/blog/Path 9.png'
import glowsmhalf from '../../assets/imgs/blog/Path 6.png'
import Bloglg from '../../assets/imgs/blog/blog-lg.png'
import Kor from '../../assets/imgs/blog/kor.png'
import Retail from '../../assets/imgs/blog/retail.png'
import Restock from '../../assets/imgs/blog/restock.png'
import Rightarrowsm from '../../assets/svgs/Rightarrowsm'
import BlogService from '../../services/BlogService'


import {setBlogs, setOneBlog, setTotalPages} from '../../store/actions'
import { useSelector, useDispatch } from "react-redux";


function Blog() {
  const {blogs, totalPages} = useSelector((state)=>({
    blogs: state.Blogs.blogs,
    totalPages: state.Blogs.totalPages
  }))

  const dispatch = useDispatch()

  const [page, setPage] = useState(1)
  const [activePage, setActivePage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState(null)


  useEffect(()=>{
    run()
  },[page])

  async function run (){
    const query = `page=${page}&_fields=id,title,acf.publisher,acf.blog_img`
    setIsLoading(true)
    try{
      const res = await BlogService.getBlogs(query)
      dispatch(setTotalPages(res.headers["x-wp-totalpages"]))
      dispatch(setBlogs(res.data))
      setActivePage(page)
      setIsLoading(false)
    } catch(e){ 
      console.log(e)
      setErrors(e)
      setPage(activePage)
      setIsLoading(false)
    }
  }

  const handleSetPage = (key) =>{
    if(page === key){
      return
    }
    if(isLoading){
      return
    }
    setPage(key)
    run()
  }
  const prev = () =>{
    if(page === 1){
      return
    }
    if(isLoading){
      return
    }
    setPage(page-1)
    run()
  }
  const next = () =>{
    if(page >= totalPages){
      return
    }
    if(isLoading){
      return
    }
    setPage(page + 1)
    run()
  }
  const blogArr = blogs
  const firstBlog = blogArr.shift()
  return (
    <>
      <section className="blog">
        <Row className='mb-30px mt-30px'>
          <Col md={8}>
            <h1 className="app-h1">Blog</h1>
          </Col>
          <Col className='ps-5' md={4}>
            <div className="search">
              <input type="text" placeholder='search'/>
              <Buttons border='none' width={'39px'} height={'32.5px'} text={<Search/>}></Buttons>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            {blogs && <BlogCardLg blog={firstBlog}/>}
            
            <Row>
              {blogArr.map((blog, key)=>(
                <Col key={key} md={6}>
                  <BlogCardSm blog={blog}/>
                </Col>
              ))}
              
              
              <div className="blog-pagination">
                {
                  activePage > 1 && <div onClick={prev} className="blog-pag-btn pag-left">
                  <Rightarrowsm/>
                </div>
                }
                
                {
                  Array(parseInt(totalPages)).fill(0).map((_, i) => {
                    return (
                      <div key={i+1} onClick={()=>{handleSetPage(i+1)}} className={`blog-pag-btn ${activePage === i+1 ? 'pag-active' : ''}`}>
                      {i+1}
                    </div>
                    )
                  })
                  
                }
                <div onClick={next} className="blog-pag-btn">
                  <Rightarrowsm/>
                </div>
                {/* {activePage < totalPages && <div onClick={next} className="blog-pag-btn">
                  <Rightarrowsm/>
                </div>} */}
                
              </div>
            </Row>
          </Col>
          <Col className='ps-5'  md={4}>
            <div className="blog-top-posts">
              <div className="top-post-header mb-20px d-flex align-items-center">
                <Star/>
                <h5 className='ms-3 mb-0 app-h5'>Top Posts</h5>
                <div className="blog-top-post-glow">
                  <img src={glowmd} alt="" />
                </div>
              </div>
              <div className="side-posts mb-20px">
                <h6>What is a Best buy Bot and where can you buy one?</h6>
                <p className='mb-0'>Author: Stellar AIO</p>
              </div>
              <div className="side-posts mb-20px">
                <h6>What is a Best buy Bot and where can you buy one?</h6>
                <p className='mb-0'>Author: Stellar AIO</p>
              </div>
              <div className="side-posts mb-20px">
                <h6>What is a Best buy Bot and where can you buy one?</h6>
                <p className='mb-0'>Author: Stellar AIO</p>
              </div>
              <div className="side-posts mb-20px">
                <h6>What is a Best buy Bot and where can you buy one?</h6>
                <p className='mb-0'>Author: Stellar AIO</p>
              </div>
            </div>
            <div className="blog-socials">
              <div className="top-post-header mb-20px d-flex align-items-center">
                <Star/>
                <h5 className='ms-3 mb-0 app-h5'>Instagram</h5>
                  <div className="blog-top-post-glow">
                    <img src={glowmd} alt="" />
                  </div>
              </div>
              <div className="blog-socials-content d-flex justify-content-between align-items-center">
                <div className="blog-socials-img">
                  <img src={Kor} alt="img" />
                </div>
                <div className="blog-socials-img">
                  <img src={Retail} alt="img" />
                </div>
                <div className="blog-socials-img">
                  <img src={Restock} alt="img" />
                </div>
                <div className="blog-socials-img">
                  <img src={Kor} alt="img" />
                </div>
                <div className="blog-socials-img">
                  <img src={Retail} alt="img" />
                </div>
                <div className="blog-socials-img">
                  <img src={Restock} alt="img" />
                </div>
              </div>
            </div>
            <div className="blog-socials">
              <div className="top-post-header mb-20px d-flex align-items-center">
                <Star/>
                <h5 className='ms-3 mb-0 app-h5'>Twitter</h5>
                  <div className="blog-top-post-glow">
                    <img src={glowmd} alt="" />
                  </div>
              </div>
              <div className="blog-socials-content d-flex justify-content-between align-items-center">
                <div className="blog-socials-img">
                  <img src={Kor} alt="img" />
                </div>
                <div className="blog-socials-img">
                  <img src={Retail} alt="img" />
                </div>
                <div className="blog-socials-img">
                  <img src={Restock} alt="img" />
                </div>
                <div className="blog-socials-img">
                  <img src={Kor} alt="img" />
                </div>
                <div className="blog-socials-img">
                  <img src={Retail} alt="img" />
                </div>
                <div className="blog-socials-img">
                  <img src={Restock} alt="img" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default Blog