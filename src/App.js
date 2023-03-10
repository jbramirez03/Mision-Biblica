import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Studies from './components/Studies';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Survey from './components/Survey';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<>
          <Header colored={false} />
          <Hero />
          <Footer></Footer>
        </>}></Route>
        <Route path='/about' element={<>
          <Header colored={true} />
          <About />
          <Footer />
        </>}></Route>
        <Route path='/studies' element={<>
          <Header colored={true} />
          <Studies />
          <Footer />
        </>}></Route>
        <Route path='survey' element={<>
          <Header colored={true} />
          <Survey />
          <Footer />
        </>}>
        </Route>
        <Route path='/contact' element={<>
          <Header colored={true} />
          <Contact />
          <Footer />
        </>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
