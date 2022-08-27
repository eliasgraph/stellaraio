import {
  SET_BLOGS,
  SET_ONE_BLOG,
  SET_TOTAL_PAGES
} from './acionTypes'

const INIT_STATE = {
  blogs: [],
  oneBlog: null,
  totalPages: 0,
  relatedBlogs: [],
  topPost:[],
}

const Blogs = (state = INIT_STATE, action) =>{
  switch (action.type) {
    case SET_BLOGS:
      return {
        ...state,
        blogs: action.payload
      };
    
    case SET_ONE_BLOG:
      return {
        ...state,
        oneBlog: action.payload
      }
    case SET_TOTAL_PAGES:
      return{
        ...state,
        totalPages: parseInt(action.payload) 
      }
    default:
      return state;
  }
}

export default Blogs