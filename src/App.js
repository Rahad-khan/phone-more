import { Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './components/Error/Error';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Oreders from './components/Orders/Oreders';
import Review from './components/Review/Review';

function App() {
  return (
    <div className='w-5/6 mx-auto'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/orders' element={<Oreders/>}></Route>
        <Route path='/review' element={<Review/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
