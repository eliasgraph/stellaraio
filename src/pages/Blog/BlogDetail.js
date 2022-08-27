import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Row, Col} from 'reactstrap'
import Buttons from '../../components/Generals/Buttons'
import BackArror from '../../assets/svgs/BackArrow'
import Search from '../../assets/svgs/Search'
import Bloglg from '../../assets/imgs/blog/blog-lg.png'
import TweetScreen from '../../assets/imgs/blog/tweet-screenshot.png'
import TweetScreenOverlay from '../../assets/imgs/blog/tweetscrenover.png'
import Twittersm from '../../assets/svgs/Twittersm'
import Instagramsm from '../../assets/svgs/Instagramsm'
import Discordsm from '../../assets/svgs/Discordsm'
import Star from '../../assets/svgs/Star'
import glowbig from '../../assets/imgs/blog/Path 10.png'
import BlogCardSm from '../../components/Blog/BlogCardSm'
import { useSelector } from 'react-redux'
import { setOneBlog } from '../../store/actions'
import {useDispatch} from 'react-redux'
import BlogService from '../../services/BlogService'
import {useParams} from 'react-router-dom'

function BlogDetail() {
  const {errors, setErrors} = useState()
  const {oneBlog} = useSelector((state)=>({
    oneBlog: state.Blogs.oneBlog
  }))
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{
    async function run (){      const query = `_fields=id,title,content,acf`
      try{
        const res = await BlogService.getOneBlog(id, query)
        dispatch(setOneBlog(res.data))
      } catch(e){ 
        console.log(e)
        setErrors(e)
      }
    }
    run()
  },[])
  const pushJoinWaitlist = ()=>{
    navigate('/add-to-waitlist')
  }
  const goBack = ()=>{
    navigate(-1)
  }
  return (
    <>
      <div className="share-blog-sticky">
        <div className="share-blog-item share-blog-twitter">
          <Twittersm/>
        </div>
        <div className="share-blog-item share-blog-instagram">
          <Instagramsm/>
        </div>
        <div className="share-blog-item share-blog-discord">
          <Discordsm/>
        </div>
      </div>
      <section className="blog-detail">
      <Row className='mb-30px mt-30px'>
          <Col md={8}>
            <div role={'button'} onClick={goBack} style={{width: 'max-content'}} className="d-flex align-items-center cursor-pointer position-relative z-index-1">
              <BackArror/>
              <p className='mb-0 ms-2'>Back</p>
            </div>
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
            <div className="blog-card-detail position-relative">
              <div className="blog-card-details-glow">
              {<img src={glowbig} alt="" />}
              </div>
              {oneBlog && <h5 className='app-h5'>{oneBlog.title.rendered}</h5>}
              {oneBlog && <p className='app-color-primary'>Author: {oneBlog.acf.publisher}</p>}
              {oneBlog && <div className="blog-card-detail-img mb-20px">
                {oneBlog.acf.blog_img &&<img src={oneBlog.acf.blog_img} alt="" />}
              </div>}
              
              {oneBlog && <p dangerouslySetInnerHTML={{__html: oneBlog.content.rendered}} className="blog-card-detail-description mb-0"></p>}
              {oneBlog && <div className="tweet-screenshot mt-20px">
                {oneBlog.acf.twitter_img && <img src={oneBlog.acf.twitter_img} alt="tweet" />}
                
              </div>}
              
            </div>

            <div className="mt-20px">
              <h5 className="app-h5">Walmart</h5>
              {oneBlog && <p>{oneBlog.acf.walmart}</p>}
              {oneBlog &&<div className="tweet-screenshot mt-20px">
                {oneBlog.acf.walmart_img &&<img src={oneBlog.acf.walmart_img} alt="" /> } 
              </div>}
              
            </div>

            <div className="mt-30px">
              <h5 className="app-h5">Target</h5>
              {oneBlog && <p>
                {oneBlog.acf.target}
              </p>}
              {oneBlog && <div className="tweet-screenshot mt-20px">
                {oneBlog.acf.target_img && <img src={TweetScreen} alt="tweet" />}
              </div>}
              
            </div>
            <div className="blog-detail-conclusion mt-30px">
              <h5 className="app-h5">Conclusion</h5>
              <p>
              {oneBlog.acf.conclusion}
              </p>
              <Buttons clicked={pushJoinWaitlist} text={"Join The Waitlist"} border={"none"} width={"177px"}/>
            </div>

            <div className="blog-detail-share-post mt-3">
              <p>share this post</p>
              <div className="blog-detail-share-socials d-flex">
                <div className="me-3">
                  <Twittersm/>
                </div>
                <div className="me-3">
                  <Instagramsm/>
                </div>
                <div className="">
                  <Discordsm/>
                </div>
                
              </div>
            </div>
          </Col>
          <Col className='ps-5' md={4}>
            <div className="blog-top-posts">
                <div className="top-post-header mb-20px d-flex align-items-center">
                  <Star/>
                  <h5 className='ms-3 mb-0 app-h5'>Related Blogs</h5>
                </div>
                <BlogCardSm small={true}/>
                <BlogCardSm small={true}/>
                <BlogCardSm small={true}/>
                
            </div>
            <div className="blog-top-posts">
                <div className="top-post-header mb-20px d-flex align-items-center">
                  <Star/>
                  <h5 className='ms-3 mb-0 app-h5'>Recent Posts</h5>
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
          </Col>
        </Row>
      </section>
    </>
  )
}

export default BlogDetail