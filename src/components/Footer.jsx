import React from 'react'
const Footer = () => {
    return (
        <footer className='w-full h-auto bg-black text-white flex flex-col justify-center items-center p-5 space-y-5'>
            <div className='md:w-full'>
                <div><h1 className=' text-[20px] font-bold'>SkyMate</h1></div>
                <div className=''>
                    <ul className='flex flex-col items-center md:list-none md:flex md:flex-row  md:space-x-[150px]'>
                        <li>About</li>
                        <li>Support</li>
                        <li>Products</li>
                    </ul>
                </div>
            </div>
            <div className='flex'>
                <img src="/assets/Socials/facebook.png" alt="" />
                <img src="/assets/Socials/github.png" alt="" />
                <img src="/assets/Socials/linkedin.png" alt="" />
                <img src="/assets/Socials/instagram.png" alt="" />
            </div>
            <div>
                <p> &#169; 2024 SkyMate. All rights Reserved.</p>
            </div>
            <div>
                <p>Coded By Habib</p>
            </div>
        </footer>
    )
}

export default Footer