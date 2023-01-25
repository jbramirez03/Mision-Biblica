import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<></>}></Route>
        <Route path='/about'></Route>
        <Route path='/studies'></Route>
        <Route path='/contacts'></Route>
      </Routes>
    </Router>
  );
}

export default App;
