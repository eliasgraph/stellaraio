import Api from "./Api";

const BlogService = {
  getBlogs(query){
    return Api().get(`/blogs?${query}`)
  },
  getOneBlog(id, query){
    return Api().get(`/blogs/${id}?${query}`)
  },
  getBlogImg(id){
    return Api().get(`/media/${id}`)
  },
  getTopPosts(query){
    return Api().get(`/blogs?${query}`)
  },
  getRelatedBlogs(query){
    return Api().get(`/blogs?${query}`)
  }
}

export default BlogService