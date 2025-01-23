import React from 'react'

function AboutContent() {
  return (
    <div className='w-full h-auto flex flex-col justify-center font-serif items-center  my-5 mb-10'>

      <div className='w-full h-[150px] flex flex-col justify-center items-center'>
        <h1 className='text-white text-center text-3xl font-extrabold'>About Us</h1>
      </div>
      <div className='w-[95%] h-auto bg-white flex flex-col gap-3 rounded-lg p-3 '>
        <section className='md:p-5 mt-5 border-[3px] border-[#2a93bd] rounded-lg '>
          <div className=''>
            <h1 className='text-[20px] font-bold p-4 '>Welcome to <span className='text-[#2a93bd]'>Sky</span>Mate</h1>
            <p className='text-[20px]  p-4'>Our mission is to provide you with accurate, up-to-date weather information from around the world. 
              Whether you're planning your day, traveling, or simply curious about the weather in another city, we've got you covered!<br />

               Using modern tools and APIs, 
              we strive to deliver reliable weather data in a user-friendly and visually appealing interface.</p>
          </div>

        </section>
        <section className='flex flex-col border-[3px] border-[#2a93bd] rounded-lg mt-5 mb-5 
        md:text-[15px] md:flex-row md:flex-wrap md:justify-center md md:gap-2'>
          <div className="flex flex-col  gap-5 md:flex md:flex-row md:flex-wrap 
        md:justify-start md:items-start md:p-5 md:gap-x-[100px] md:px-8">
          <div className=' md:w-[250px] md:h-auto '>
            <h1 className=' font-bold'>What We <span className='text-[#2a93bd]'>Offer</span></h1>
            <ul className='list-disc px-4'>
              <li>Current weather conditions for cities worldwide.</li>
              <li>Temperature, humidity, wind speed, and more – all in one place</li>
              <li>A sleek, responsive design that works on mobile, tablet, and desktop.</li>
              <li>Search functionality to find detailed weather for any location.</li>
              <li>Quick weather snapshots for popular cities on the home page</li>
            </ul>
          </div>
          <div className='md:w-[250px] md:h-auto'>
            <h1 className=' font-bold'><span className='text-[#2a93bd]'>Powered</span> by Modern Technology</h1>
            <p>Our app is built using React.js for a seamless user experience, styled with Tailwind CSS for a clean and responsive design. 
              We integrate the OpenWeather API to ensure you get accurate, real-time weather data</p>
          </div>
          <div className='md:w-[250px] md:h-auto'>
            <h1 className=' font-bold'><span className='text-[#2a93bd]'>Why</span> We Built This App</h1>
            <p>We believe that staying informed about the weather should be simple and accessible for everyone. 
              Our goal is to make weather updates as intuitive as possible, 
              whether you're checking for your hometown or exploring forecasts across the globe.</p>
          </div>
          <div className='md:w-[250px] md:h-auto'>
            <h1 className=' font-bold'>Stay <span className='text-[#2a93bd]'>Informed</span>, Anytime, Anywhere</h1>
            <p>Bookmark our app today and make it your go-to source for reliable weather updates. 
              Rain or shine, SkyMate is here to help you stay prepared!</p>
          </div>
        </div>
          
        </section>
      </div>        
    </div>
  )
}

export default AboutContent