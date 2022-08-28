import {
  SET_BLOGS,
  SET_ONE_BLOG,
  SET_TOTAL_PAGES,
  SET_TOP_POSTS
} from './acionTypes'

export const setBlogs = (payload) => ({
  type: SET_BLOGS,
  payload
})
export const setOneBlog = (payload) => ({
  type: SET_ONE_BLOG,
  payload
})
export const setTotalPages = (payload) => ({
  type: SET_TOTAL_PAGES,
  payload
})
export const setTopPosts = (payload) => ({
  type: SET_TOP_POSTS,
  payload
})