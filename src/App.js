import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { Container } from 'reactstrap';

import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import AddToWaitlist from './pages/AddToWaitlist/AddToWaitlist'

import Header from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <div className="app-content">
          <Container>
            <Routes>
              <Route path="/" element={ <Landing/> }/>
              <Route path="/about" element={ <About/>} />
              <Route path="/add-to-waitlist" element={ <AddToWaitlist/>} />
            </Routes>
          </Container>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
