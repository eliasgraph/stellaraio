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

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <div className="app-content position-relative">
          <Container>
            <Routes>
              <Route path="/" element={ <Landing/> }/>
              <Route path="/about" element={ <About/>} />
              <Route path="/add-to-waitlist" element={ <AddToWaitlist/>} />
              <Route path="/blog" element={ <Blog/>} />
              <Route path="/blog/:id" element={ <BlogDetail/>} />
              <Route path="/thank-you" element={ <ThankYou/>} />
            </Routes>
          </Container>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
