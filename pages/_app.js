import { useEffect } from 'react';
import TagManager from 'react-gtm-module'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MMVSWXQ' });
  }, [])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp
