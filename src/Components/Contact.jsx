import React from 'react'

const Contact = () => {
  return (
    <div className='px-8'>
      <form action="" className='flex flex-wrap gap-4 py-4 justify-center'>
        <input type="text" placeholder='name' className='p-2 rounded-xl border-2 border-gray-500 bg-transparent'/>
        <input type="text" placeholder='email' className='p-2 rounded-xl border-2 border-gray-500 bg-transparent'/>
        <input type="text" placeholder='subject' className='p-2 rounded-xl border-2 border-gray-500 bg-transparent'/>
        <textarea name="" id="" className='w-[96%] bg-transparent border-2 rounded-xl p-2 border-gray-600' placeholder='your queries?'></textarea>
        <button type="submit" className='px-5 py-1 bg-gray-800 rounded-full text-[#f1f1f1]'>SEND <i class="ri-arrow-right-up-line"></i></button>
      </form>
      <div className='py-6 border-y-2 border-black space-y-10'>
        <h1 className='text-3xl w-[70%] font-semibold '>Say hi to me with an email.</h1>
        <ul>
          <li className='text-sm font-medium'>
            <i class="ri-mail-fill"></i> EMAIL ADDRESS
          </li>
          <a href='mailto:vinayaknawdhar003@gmail.com' className='text-sm'>vinayaknawdhar003@gmail.com</a>
          <li className='text-sm font-medium'>
            <i class="ri-mail-fill"></i> Phone Address
          </li>
          <a href='tel:+917727944259' className='text-sm'>+91 7727944259</a>
        </ul>
        <ul className='flex flex-wrap gap-5 underline'>
          <li>
            <a href="https://www.linkedin.com/in/vinayaknawdhar/">LINKEDIN</a>
          </li>
          <li>
            <a href="https://github.com/VinayakNawdhar">GITHUB</a>
          </li>
          <li>
            <a href="https://leetcode.com/u/vinayaknawdhar003/">LEETCODE</a>
          </li>
          <li>
            <a href="https://x.com/NawdharVinayak">TWITTER</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact