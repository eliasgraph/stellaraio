import Header from "./Navbar"
import Footer from "./Footer"
import {Container} from 'reactstrap'
import Meta from './Meta'
function Layout({children}) {
  return (
    <>
      <Meta/>
      {<div className="product-page-top"></div>}
      <Header/>
      <Container>
        {children}
      </Container>
      <Footer/>
    </>
    
  )
}

export default Layout