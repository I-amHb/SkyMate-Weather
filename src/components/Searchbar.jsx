import React from 'react';
import { useState } from 'react';

function Searchbar({ onCityChange }) {

  const [inputValue, setInputValue] = useState('')

  const handleSearch = () => {
    if (inputValue.trim()) {
      onCityChange(inputValue.trim());
    }
  }

  return (
    <div className='w-full h-[80px] flex flex-row justify-center items-center gap-3 '>
       <input className=' p-4 bg-slate-500 h-10  min-w-[20px] md:min-w-[350px] rounded-3xl ' 
       type="text" 
       name="search" 
       id="search" 
       placeholder='Enter city name'
       value={inputValue} 
       onChange={(e) => setInputValue(e.target.value)} 
       />
       <button onClick={handleSearch} > 
        <img className=' w-10 ' src="./assets/search.png" alt="" /> 
        </button>
    </div>
    
  )
}

export default Searchbar