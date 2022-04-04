import { Route, Routes } from 'react-router-dom';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Reviews from './components/Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className='p-3 sm:p-0 sm:w-5/6 mx-auto'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/reviews' element={<Reviews/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
