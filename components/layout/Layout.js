import {useState, useEffect} from 'react'
import Header from "./Navbar"
import Footer from "./Footer"
import {Container} from 'reactstrap'
import Meta from './Meta'
function Layout({children}) {
  const [path, setPath] = useState('')
  useEffect(()=>{
    setPath(window.location.pathname)
  },[])
  return (
    <>
      <Meta/>
      {path === '/sportcards' && <div className="product-page-top"></div>}
      <Header/>
      <Container>
        {children}
      </Container>
      <Footer/>
    </>
    
  )
}

export default Layout