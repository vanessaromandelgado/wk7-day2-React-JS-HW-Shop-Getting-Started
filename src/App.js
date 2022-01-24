import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="Cart App">
      <Navbar />
      <Routes>
        <Route path = '/' element ={<Home />}/>
        <Route path = '/shop' element = {<Shop />}/>
      </Routes>
    </div>
  );
}

export default App;
