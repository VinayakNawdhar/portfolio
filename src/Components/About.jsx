import React from 'react'
import react from '../assets/react.webp'
import django from '../assets/django.webp'
import nodejs from '../assets/nodejs.png'
import nextjs from '../assets/nextjs.png'
import python from '../assets/python.png'
import postgres from '../assets/postgres.png'
import mongo from '../assets/mongo.png'
import github from '../assets/github.png'
import vercel from '../assets/vercel.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const About = () => {
  gsap.registerPlugin(useGSAP)
  useGSAP(() => {
    gsap.from('.about img',{
      y : 100,
      opacity : 0,
      stagger : 0.2
    })
    
    gsap.from('.about .intro',{
      opacity : 0,
      y : '-100%',
      stagger : 0.2,
      ease : 'power1.inOut',
      duration : 1
    })
    gsap.from('.about ul li',{
      opacity : 0,
      x : '-100%',
      stagger : 0.5,
      ease : 'power1.inOut'
    })
  })
  return (
    <div className='px-8 about'>
      <div className='py-2 border-y-2 border-black relative'>
      {/* <h1 className='flex flex-col absolute right-0 top-[50%] translate-y-[-50%] text-6xl items- font-bold text-gray-50'><span>S</span><span>K</span><span>I</span><span>L</span><span>L</span><span>S</span></h1> */}
      <h3>ABOUT ME</h3>
      <div className='w-[80%] py-8'>
        <h1 className='intro'>Hey, there! I’m a 30 year old computer programmer who’s so passionate about coding that I started a YouTube channel devoted to it titled: clairecodes! Check it out for more information about me and to learn from my coding tutorials.</h1>
        <ul className='flex flex-col gap-5 mt-5'>
          <li>
            <h2 className='text-sm font-bold'>DESIGN</h2>
            <h3>I studied Graphic Design undergrad at School of Visual Arts (SVA) in NYC and graduated in 2018.</h3>
          </li>
          <li>
            <h2 className='text-sm font-bold'>DEVELOPMENT.</h2>
            <h3>I have worked in the development field for about 3 years after graduating from the Grace Hopper program at Fullstack Academy in 2019.</h3>
          </li>
          <li>
            <h2 className='text-sm font-bold'>FINE ART.</h2>
            <h3>I love to paint and draw. Check out more of my fine art work at this link.</h3>
          </li>
        </ul>
      </div>
      <div className='flex flex-wrap gap-7 justify-center p-0 right-[0] items-center top-1/2 translate-y-[-50%] mt-10'>
          <img className='h-[30px]' src={react} alt="" />
          <img className='h-[30px]' src={nodejs} alt="" />
          <img className='h-[30px]' src={nextjs} alt="" />
          <img className='h-[30px]' src={django} alt="" />
          <img className='h-[30px]' src={python} alt="" />
          <img className='h-[30px]' src={postgres} alt="" />
          <img className='h-[30px]' src={mongo} alt="" />
          <img className='h-[30px]' src={github} alt="" />
          <img className='h-[30px]' src={vercel} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default About