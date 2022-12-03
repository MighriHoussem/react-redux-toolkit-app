import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import './styles/index.scss';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className={'container'}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
