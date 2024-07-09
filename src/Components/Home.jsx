import React from 'react'
import hello from '../assets/hello.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Home = () => {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from('.home img',{
      x : -2000,
      opacity : 0,
      rotate : -2000,
      duration : 3
    })
   gsap.from('.hiding h1',{
    y : '100%',
    stagger : 0.5,
    ease :'sine.inOut',
    duration : 0.6
   })
  })
  return (
    <div className='p-8 home relative'>
      <div className='flex justify-end xl:inline xl:float-end'>
        <img className='w-32 xl:w-40 mr-10 hello-img' src={hello} alt="hello" />
      </div>
      <div className='mt-8 xl:mt-10 font-[600]'>
        <h1 className='w-[90%] text-[7vw] xl:text-[5vw] tracking-wider leading-10 xl:leading-tight'>
         <div className='hiding'><h1> HI, I’M VINAYAK.</h1></div>
         <div className='hiding'><h1> A FULL STACK DEVELOPER</h1></div>
         <div className='hiding'><h1> BASED IN BANGALORE.</h1></div>
        </h1>
      </div>
      <div className='mt-10 xl:mt-20'>
        <a href="/CV.pdf" className='text-[#EBEBEB] bg-black px-10 py-5 text-2xl' target='_blank'>Resume <i class="ri-arrow-down-line"></i></a>
      </div>
    </div>
  )
}

export default Home