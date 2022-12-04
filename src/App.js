import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import './styles/index.scss';
import Users from './components/Users';
import Groups from './components/Groups';
import Administration from './components/Administration';
import User from './components/User.jsx';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className={'container'}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          {/** Nested routes for administration panel */}
          <Route path='/administration' element={<Administration />}>
            <Route path='users' element={<Users />}>
              <Route path=':uid' element={<User />} />
            </Route>
            <Route path='groups' element={<Groups />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
