import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Studies from './components/Studies';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';


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
        <Route path='/contacts' element={<>
          <Header />
          <Contact />
          <Footer />
        </>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
