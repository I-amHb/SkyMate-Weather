import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';



function App() {

    
  return (
    <BrowserRouter>
    <div className='min-h-screen bg-nature bg-cover to-slate-300 text-black font-sans'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      
    </div>
      <Footer/>
    </BrowserRouter>
    
    // <div>
    //   <ApiFetcher/>
    // </div>
    
  )
}

export default App
