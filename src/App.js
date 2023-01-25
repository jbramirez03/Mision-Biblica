import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Studies from './components/Studies';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<>
          <Header />
          <Home />
          <Footer></Footer>
        </>}></Route>
        <Route path='/about'></Route>
        <Route path='/studies'></Route>
        <Route path='/contacts'></Route>
      </Routes>
    </Router>
  );
}

export default App;
