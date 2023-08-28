import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import TagManager from 'react-gtm-module'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  const [isNewLayout, setIsNewLayout] = useState(false)
  
  const router = useRouter();
  
  useEffect(() => {
    const currentPathname = router.pathname;
    const isPathStartingWithNewLayout = currentPathname.startsWith('/new_layout');
    setIsNewLayout(isPathStartingWithNewLayout)
    TagManager.initialize({ gtmId: 'GTM-MMVSWXQ' });
  }, [])

  const getLayouts = ()=>{
    if(isNewLayout){
      return <div>
        {/* <div>Header</div> */}
          <Component {...pageProps} />
        {/* <div>Footer</div> */}
      </div>
    } else {
      return <Layout>
      <Component {...pageProps} />
  </Layout>
    }
  }
  return (
    getLayouts()
  )
}

export default MyApp
