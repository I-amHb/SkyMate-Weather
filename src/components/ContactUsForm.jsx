import React from 'react'

function ContactUsForm() {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center  '>
        <div className='w-[95%] h-2/3  bg-[#ffffff] flex flex-col justify-center items-center p-4 rounded-lg md:w-[60%] gap-6
        md:h-3/4 '>
          <div className='w-full '>
            <h1 className='text-[25px] text-center font-extrabold '>Contact US</h1>
          </div>
          <form action="" className='w-full h-2/3 flex flex-col gap-4 justify-center items-center border-x-0 border-[#2a93bd] border-[3px]' >
              <input className='w-[200px] md:w-[270px] bg-slate-800  focus:outline-none px-2 text-white
              border-x-[0] border-t-[0] border-[3px] border-b-[#2a93bd] hover:border-[#2a93bd] hover:border-x-[3px] hover:border-t-[3px] ' type="text" placeholder='Name' required />
              <input className='w-[200px] md:w-[270px] bg-slate-800  focus:outline-none px-2 text-white
              border-x-[0] border-t-[0] border-[3px] border-b-[#2a93bd] hover:border-[#2a93bd] hover:border-x-[3px] hover:border-t-[3px] ' type="email" placeholder='Email' required/>
              <textarea className='w-[200px] md:w-[270px] bg-slate-800  focus:outline-none px-2 text-white
              border-x-[0] border-t-[0] border-[3px] border-b-[#2a93bd] hover:border-[#2a93bd] hover:border-x-[3px] hover:border-t-[3px] ' name="message" id="message" placeholder='Message' required></textarea>
              <button className='bg-[#2a93bd] w-20 h-10 rounded-sm '>SEND</button>
          </form>
        </div>
    </div>
  )
}

export default ContactUsForm