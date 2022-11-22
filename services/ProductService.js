import Api from "./Api";

const ProductService = {
  getAllProducts(query){
    return Api().get(`/'products?${query}`)
  },
  getProductPageDetails(slug, query){
    
    return Api().get(`/products?search=${slug}&query=${query}`)
  }
}

export default ProductService