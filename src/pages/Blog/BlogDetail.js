import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import Buttons from '../../components/Generals/Buttons'
import BackArror from '../../assets/svgs/BackArrow'
import Search from '../../assets/svgs/Search'
import Twittersm from '../../assets/svgs/Twittersm'
import Star from '../../assets/svgs/Star'
import glowbig from '../../assets/imgs/blog/Path 10.png'
import BlogCardSm from '../../components/Blog/BlogCardSm'
import { useSelector } from 'react-redux'
import { setOneBlog, setBlogs,setTopPosts } from '../../store/actions'
/* import { useDispatch } from 'react-redux' */
import BlogService from '../../services/BlogService'
import { useParams } from 'react-router-dom'
import Posts from '../../components/Blog/Posts'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { Helmet } from 'react-helmet'

function BlogDetail() {
  const [errors, setErrors] = useState({})
  const { blogs, oneBlog, topPosts } = useSelector((state) => ({
    blogs: state.Blogs.blogs,
    oneBlog: state.Blogs.oneBlog,
    topPosts: state.Blogs.topPosts

  }))

  const { slug } = useParams()
  /* const dispatch = useDispatch() */
  const navigate = useNavigate()
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  useEffect(() => {
    run()
    prerun()
    getTopPosts()
  }, [])
  async function prerun (){
    const query = `per_page=${10}&page=${1}&_fields=id,title,content,acf`
    
    try{
      const res = await BlogService.getBlogs(query)
      /* dispatch(setBlogs(res.data)) */
    } catch(e){ 
      setErrors(e)
    }
  }
  async function getTopPosts (){
    const query = `per_page=4&_fields=id,title,content,acf`
    try {
      const res = await BlogService.getTopPosts(query)
      /* dispatch(setTopPosts(res.data)) */
    } catch (e) {
      setErrors({...errors, topPost: true})
    }
  }

  async function run() {
    const query = `_fields=id,title,content,acf`
    try {
      const res = await BlogService.searchOneBlog(slug, query)
      const data = res.data.filter(blog => blog.acf.url === slug)
      /* dispatch(setOneBlog(data[0])) */
      document.querySelector('title').textContent = data[0].title.rendered
    } catch (e) {
      console.log(e)
      setErrors(e)
    }
  }
  const pushJoinWaitlist = () => {
    navigate('/add-to-waitlist')
  }
  const goBack = () => {
    navigate(-1)
  }
  const twitterShare = () => {
    window.open(`https://twitter.com/share?url=${window.location.href}&text=${oneBlog.title.rendered}`, '_blank')
  }
  return (
    <>
      <div className="share-blog-sticky">
        <div onClick={twitterShare} className="share-blog-item share-blog-twitter">
          <Twittersm />
        </div>
      </div>
      <section className="blog-detail">
        <Row className='mb-30px mt-30px'>
          <Col md={8}>
            <div role={'button'} onClick={goBack} style={{ width: 'max-content' }} className="d-flex align-items-center cursor-pointer position-relative z-index-1">
              <BackArror />
              <p className='mb-0 ms-2'>Back</p>
            </div>
          </Col>
          <Col className='ps-5' md={4}>
            <div className="search">
              <input type="text" placeholder='search' />
              <Buttons border='none' width={'39px'} height={'32.5px'} text={<Search />}></Buttons>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            {oneBlog && oneBlog.acf ? (<div>
              <Helmet>
                <title>{oneBlog.title.rendered}</title>
              </Helmet>
              <div className="blog-card-detail position-relative">
                <div className="blog-card-details-glow">
                  {<img src={glowbig} alt="" />}
                </div>
                {oneBlog && <h1 dangerouslySetInnerHTML={{ __html: oneBlog.title.rendered }} className='blog-detail-title'></h1>}
                {oneBlog && <p className='app-color-primary'>Author: {oneBlog.acf.publisher}</p>}
                {oneBlog && <div className="blog-card-detail-img mb-20px">
                  {oneBlog.acf.blog_img && <img src={oneBlog.acf.blog_img} alt="" />}
                </div>}

                {oneBlog && <p dangerouslySetInnerHTML={{ __html: oneBlog.content.rendered }} className="blog-card-detail-description mb-0"></p>}
                {oneBlog && <div className="tweet-screenshot mt-20px">
                  {oneBlog.acf.twitter_img && <img src={oneBlog.acf.twitter_img} alt="tweet" />}

                </div>}
              </div>

              {oneBlog.acf.title_1 && <h2 className="blog-detail-subtitle mb-20px">{oneBlog.acf.title_1}</h2>}
              {oneBlog.acf.sub_title_1 && <h3 className="blog-detail-subtitle-sub mb-20px">{oneBlog.acf.sub_title_1}</h3>}
              {oneBlog.acf.description_1 && <p className="mb-30px blog-detail-description" dangerouslySetInnerHTML={{ __html: oneBlog.acf.description_1 }}></p>}
              {oneBlog.acf.twitter_id_1 && <div className="mb-30px">
                <TwitterTweetEmbed
                  tweetId={oneBlog.acf.twitter_id_1}
                />
              </div>}
              {oneBlog.acf.image_1 && <div className="blog-detail-content-imgs mb-30px"><img src={oneBlog.acf.image_1} alt="" /> </div>}


              {oneBlog.acf.title_2 && <h2 className="blog-detail-subtitle mb-20px">{oneBlog.acf.title_2}</h2>}
              {oneBlog.acf.sub_title_2 && <h3 className="blog-detail-subtitle-sub mb-20px">{oneBlog.acf.sub_title_2}</h3>}
              {oneBlog.acf.description_2 && <p className="mb-30px blog-detail-description" dangerouslySetInnerHTML={{ __html: oneBlog.acf.description_2 }} ></p>}
              {oneBlog.acf.twitter_id_2 && <div className="mb-30px">
                <TwitterTweetEmbed
                  tweetId={oneBlog.acf.twitter_id_2}
                />
              </div>}
              {oneBlog.acf.image_2 && <div className="blog-detail-content-imgs mb-30px"><img src={oneBlog.acf.image_2} alt="" /> </div>}

              {oneBlog.acf.title_3 && <h2 className="blog-detail-subtitle mb-30px">{oneBlog.acf.title_3}</h2>}
              {oneBlog.acf.sub_title_3 && <h3 className="blog-detail-subtitle-sub mb-30px">{oneBlog.acf.sub_title_3}</h3>}
              {oneBlog.acf.description_3 && <p className="mb-30px blog-detail-description" dangerouslySetInnerHTML={{ __html: oneBlog.acf.description_3 }} ></p>}
              {oneBlog.acf.twitter_id_3 && <div className="mb-30px">
                <TwitterTweetEmbed
                  tweetId={oneBlog.acf.twitter_id_3}
                />
              </div>}
              {oneBlog.acf.image_3 && <div className="blog-detail-content-imgs mb-30px"><img src={oneBlog.acf.image_3} alt="" /> </div>}


              {oneBlog.acf.title_4 && <h2 className="blog-detail-subtitle mb-20px">{oneBlog.acf.title_4}</h2>}
              {oneBlog.acf.sub_title_4 && <h3 className="blog-detail-subtitle-sub mb-20px">{oneBlog.acf.sub_title_4}</h3>}
              {oneBlog.acf.description_4 && <p className="mb-30px blog-detail-description" dangerouslySetInnerHTML={{ __html: oneBlog.acf.description_4 }} ></p>}
              {oneBlog.acf.twitter_id_4 && <div className="mb-30px">
                <TwitterTweetEmbed
                  tweetId={oneBlog.acf.twitter_id_4}
                />
              </div>}
              {oneBlog.acf.image_4 && <div className="blog-detail-content-imgs mb-30px"><img src={oneBlog.acf.image_4} alt="" /> </div>}


              {oneBlog.acf.title_5 && <h2 className="blog-detail-subtitle mb-20px">{oneBlog.acf.title_5}</h2>}
              {oneBlog.acf.sub_title_5 && <h3 className="blog-detail-subtitle-sub mb-20px">{oneBlog.acf.sub_title_5}</h3>}
              {oneBlog.acf.description_5 && <p className="mb-30px blog-detail-description" dangerouslySetInnerHTML={{ __html: oneBlog.acf.description_5 }} ></p>}
              {oneBlog.acf.twitter_id_5 && <div className="mb-30px">
                <TwitterTweetEmbed
                  tweetId={oneBlog.acf.twitter_id_5}
                />
              </div>}
              {oneBlog.acf.image_5 && <div className="blog-detail-content-imgs mb-30px"><img src={oneBlog.acf.image_5} alt="" /> </div>}


              {oneBlog.acf.title_6 && <h2 className="blog-detail-subtitle mb-20px">{oneBlog.acf.title_6}</h2>}
              {oneBlog.acf.sub_title_6 && <h3 className="blog-detail-subtitle-sub mb-20px">{oneBlog.acf.sub_title_6}</h3>}
              {oneBlog.acf.description_6 && <p className="mb-30px blog-detail-description" dangerouslySetInnerHTML={{ __html: oneBlog.acf.description_6 }} ></p>}
              {oneBlog.acf.twitter_id_6 && <div className="mb-30px">
                <TwitterTweetEmbed
                  tweetId={oneBlog.acf.twitter_id_6}
                />
              </div>}
              {oneBlog.acf.image_6 && <div className="blog-detail-content-imgs mb-30px"><img src={oneBlog.acf.image_6} alt="" /> </div>}


              {oneBlog.acf.title_7 && <h2 className="blog-detail-subtitle mb-20px">{oneBlog.acf.title_7}</h2>}
              {oneBlog.acf.sub_title_7 && <h3 className="blog-detail-subtitle-sub mb-20px">{oneBlog.acf.sub_title_7}</h3>}
              {oneBlog.acf.description_7 && <p className="mb-30px blog-detail-description" dangerouslySetInnerHTML={{ __html: oneBlog.acf.description_7 }} ></p>}
              {oneBlog.acf.twitter_id_7 && <div className="mb-30px">
                <TwitterTweetEmbed
                  tweetId={oneBlog.acf.twitter_id_7}
                />
              </div>}
              {oneBlog.acf.image_7 && <div className="blog-detail-content-imgs mb-30px"><img src={oneBlog.acf.image_7} alt="" /> </div>}


              {oneBlog.acf.title_8 && <h2 className="blog-detail-subtitle mb-20px">{oneBlog.acf.title_8}</h2>}
              {oneBlog.acf.sub_title_8 && <h3 className="blog-detail-subtitle-sub mb-20px">{oneBlog.acf.sub_title_8}</h3>}
              {oneBlog.acf.description_8 && <p className="mb-30px blog-detail-description" dangerouslySetInnerHTML={{ __html: oneBlog.acf.description_8 }} ></p>}
              {oneBlog.acf.twitter_id_8 && <div className="mb-30px">
                <TwitterTweetEmbed
                  tweetId={oneBlog.acf.twitter_id_8}
                />
              </div>}
              {oneBlog.acf.image_8 && <div className="blog-detail-content-imgs mb-30px"><img src={oneBlog.acf.image_8} alt="" /> </div>}


              {oneBlog.acf.title_9 && <h2 className="blog-detail-subtitle mb-20px">{oneBlog.acf.title_9}</h2>}
              {oneBlog.acf.sub_title_9 && <h3 className="blog-detail-subtitle-sub mb-20px">{oneBlog.acf.sub_title_9}</h3>}
              {oneBlog.acf.description_9 && <p className="mb-30px blog-detail-description" dangerouslySetInnerHTML={{ __html: oneBlog.acf.description_9 }} ></p>}
              {oneBlog.acf.twitter_id_9 && <div className="mb-30px">
                <TwitterTweetEmbed
                  tweetId={oneBlog.acf.twitter_id_9}
                />
              </div>}
              {oneBlog.acf.image_9 && <div className="blog-detail-content-imgs mb-30px"><img src={oneBlog.acf.image_9} alt="" /> </div>}


              {oneBlog.acf.title_10 && <h2 className="blog-detail-subtitle mb-20px">{oneBlog.acf.title_10}</h2>}
              {oneBlog.acf.sub_title_10 && <h3 className="blog-detail-subtitle-sub mb-20px">{oneBlog.acf.sub_title_10}</h3>}
              {oneBlog.acf.description_10 && <p className="mb-30px blog-detail-description" dangerouslySetInnerHTML={{ __html: oneBlog.acf.description_10 }} ></p>}
              {oneBlog.acf.twitter_id_10 && <div className="mb-30px">
                <TwitterTweetEmbed
                  tweetId={oneBlog.acf.twitter_id_10}
                />
              </div>}
              {oneBlog.acf.image_10 && <div className="blog-detail-content-imgs mb-30px"><img src={oneBlog.acf.image_10} alt="" /> </div>}


              {oneBlog.acf.title_11 && <h2 className="blog-detail-subtitle mb-20px">{oneBlog.acf.title_11}</h2>}
              {oneBlog.acf.sub_title_11 && <h3 className="blog-detail-subtitle-sub mb-20px">{oneBlog.acf.sub_title_11}</h3>}
              {oneBlog.acf.description_11 && <p className="mb-30px blog-detail-description" dangerouslySetInnerHTML={{ __html: oneBlog.acf.description_11 }} ></p>}
              {oneBlog.acf.twitter_id_11 && <div className="mb-30px">
                <TwitterTweetEmbed
                  tweetId={oneBlog.acf.twitter_id_11}
                />
              </div>}
              {oneBlog.acf.image_11 && <div className="blog-detail-content-imgs mb-30px"><img src={oneBlog.acf.image_11} alt="" /> </div>}


              {oneBlog.acf.title_12 && <h2 className="blog-detail-subtitle mb-20px">{oneBlog.acf.title_12}</h2>}
              {oneBlog.acf.sub_title_12 && <h3 className="blog-detail-subtitle-sub mb-20px">{oneBlog.acf.sub_title_12}</h3>}
              {oneBlog.acf.description_12 && <p className="mb-30px blog-detail-description" dangerouslySetInnerHTML={{ __html: oneBlog.acf.description_12 }} ></p>}
              {oneBlog.acf.twitter_id_12 && <div className="mb-30px">
                <TwitterTweetEmbed
                  tweetId={oneBlog.acf.twitter_id_12}
                />
              </div>}
              {oneBlog.acf.image_12 && <div className="blog-detail-content-imgs mb-30px"><img src={oneBlog.acf.image_12} alt="" /> </div>}


              {oneBlog.acf.title_13 && <h2 className="blog-detail-subtitle mb-20px">{oneBlog.acf.title_13}</h2>}
              {oneBlog.acf.sub_title_13 && <h3 className="blog-detail-subtitle-sub mb-20px">{oneBlog.acf.sub_title_13}</h3>}
              {oneBlog.acf.description_13 && <p className="mb-30px blog-detail-description" dangerouslySetInnerHTML={{ __html: oneBlog.acf.description_13 }} ></p>}
              {oneBlog.acf.twitter_id_13 && <div className="mb-30px">
                <TwitterTweetEmbed
                  tweetId={oneBlog.acf.twitter_id_13}
                />
              </div>}
              {oneBlog.acf.image_13 && <div className="blog-detail-content-imgs mb-30px"><img src={oneBlog.acf.image_13} alt="" /> </div>}


              {oneBlog.acf.title_14 && <h2 className="blog-detail-subtitle mb-20px">{oneBlog.acf.title_14}</h2>}
              {oneBlog.acf.sub_title_14 && <h3 className="blog-detail-subtitle-sub mb-20px">{oneBlog.acf.sub_title_14}</h3>}
              {oneBlog.acf.description_14 && <p className="mb-30px blog-detail-description" dangerouslySetInnerHTML={{ __html: oneBlog.acf.description_14 }} ></p>}
              {oneBlog.acf.twitter_id_14 && <div className="mb-30px">
                <TwitterTweetEmbed
                  tweetId={oneBlog.acf.twitter_id_14}
                />
              </div>}
              {oneBlog.acf.image_14 && <div className="blog-detail-content-imgs mb-30px"><img src={oneBlog.acf.image_14} alt="" /> </div>}



              <div className="blog-detail-conclusion mt-30px">
                <h2 className="blog-detail-subtitle">Conclusion</h2>
                <p className="blog-detail-description" dangerouslySetInnerHTML={{ __html: oneBlog.acf.conclusion }}>
                </p>
                <Buttons clicked={pushJoinWaitlist} text={"Join The Waitlist"} border={"none"} width={"177px"} />
              </div>
              <div className="blog-detail-share-post mt-3">
                <p>share this post</p>
                <div className="blog-detail-share-socials d-flex">
                  <div onClick={twitterShare} role={'button'} className="me-3">
                    <Twittersm />
                  </div>


                </div>
              </div>

            </div>) : <></>}
          </Col>
          <Col className='blog-right-sidebar' md={4}>
            <div className="blog-top-posts">
              <div className="top-post-header mb-20px d-flex align-items-center">
                <Star />
                <h5 className='ms-3 mb-0 app-h5'>Related Blogs</h5>
              </div>
              {(topPosts || []).map((post, key) => (
                <BlogCardSm key={key} blog={post} small={true} />
              ))}


            </div>
            <div className="blog-top-posts">
              <div className="top-post-header mb-20px d-flex align-items-center">
                <Star />
                <h5 className='ms-3 mb-0 app-h5'>Recent Posts</h5>
              </div>

              <Posts posts={blogs.slice(0, 4)} />
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
}

export default BlogDetail