import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApiFetcher from './components/ApiFetcher';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {

    
  return (
    <BrowserRouter>
    <div className='min-h-screen bg-gradient-to-b from-slate-100 to-slate-300 text-black'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
      
    </BrowserRouter>
    
    // <div>
    //   <ApiFetcher/>
    // </div>
    
  )
}

export default App
