import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { Container } from 'reactstrap';

import Header from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import AddToWaitlist from './pages/AddToWaitlist/AddToWaitlist'
import Blog from './pages/Blog/Blog';
import BlogDetail from './pages/Blog/BlogDetail';
import ThankYou from './pages/ThankYou/ThankYou';
import Terms from './pages/Terms/Terms'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <Router>
        <Helmet>
          <title>Stellar AIO - Best Sneaker and Retail Bot</title>
        </Helmet>
      <div className="app">
        <Header/>
        <div className="app-content position-relative">
          <Container>
            <Routes>
              <Route path="/" element={ <Landing/> }/>
              <Route path="/about" element={ <About/>} />
              <Route path="/add-to-waitlist" element={ <AddToWaitlist/>} />
              <Route path="/blog" element={ <Blog/>} />
              <Route path="/blog/:slug" element={ <BlogDetail/>} />
              <Route path="/thank-you" element={ <ThankYou/>} />
              <Route path="/terms-of-use" element={ <Terms/>} />
            </Routes>
          </Container>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
