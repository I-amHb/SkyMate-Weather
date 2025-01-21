import React from 'react'
import { NavLink } from 'react-router-dom';
import { X, Menu } from 'lucide-react'
import { useState } from 'react'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`transition-all duration-300 ${isOpen ? "w-full bg-slate-500 h-[180px]" : "w-full  h-[80px]"
            } bg-cover filter brightness-20`}>
            <nav className='w-full flex items-center justify-between border-b-0 p-6 flex-wrap ' >
                <h1 className="text-2xl font-bold text-white">
                    <span className=' text-[#67caf1]  font-extrabold'>Sky</span>Mate
                </h1>
                <nav className='w-1/3 h-10 flex justify-end '>
                    {/* Horizontal links for larger screens */}
                    <div className='hidden justify-evenly items-center md:flex gap-[85px] text-white font-bold text-[15px] '>
                        <NavLink className={({isActive}) =>
                            isActive
                                ? 'bg-[#2a93bd] w-16 h-10 flex justify-center items-center rounded-sm'
                                : 'w-16 h-10 flex justify-center items-center hover:border-b-[#2a93bd] hover:border-b-[2px]'
                        } to='/' >Home</NavLink>
                        <NavLink className={({isActive}) =>
                            isActive
                                ? 'bg-[#2a93bd] w-16 h-10 flex justify-center items-center rounded-sm'
                                : 'w-16 h-10 flex justify-center items-center hover:border-b-[#2a93bd] hover:border-b-[2px]'
                        } to='/about' >About</NavLink>
                        <NavLink className={({isActive}) =>
                            isActive
                                ? 'bg-[#2a93bd] w-20 h-10 flex justify-center items-center rounded-sm'
                                : 'w-20 h-10 flex justify-center items-center hover:border-b-[#2a93bd] hover:border-b-[2px]'
                        } to='/contact' >Contact Us</NavLink>
                    </div>
                    {/* Hamburger menu for smaller screens */}
                    <div className="md:hidden">
                        <button onClick={toggleNavBar}>
                            {isOpen ? <X className='text-[white]' /> : <Menu className='text-[white]' />}
                        </button>
                    </div>
                </nav>
                {/* Vertical links for smaller screens */}
                {isOpen && (
                    <div className="flex flex-col items-center basis-full gap-3 md:hidden text-white p-3">
                        <NavLink to="/" onClick={() => setIsOpen(false)}>
                            Home
                        </NavLink>
                        <NavLink to="/about" onClick={() => setIsOpen(false)}>
                            About
                        </NavLink>
                        <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                            Contact
                        </NavLink>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar