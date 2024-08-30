import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
const Project = () => {
  gsap.registerPlugin(useGSAP)
  useGSAP(() => {
    gsap.from('.project li', {
      x: -100,
      opacity: 0,
      stagger: 0.4
    })
    document.querySelector('.project-link').addEventListener('mousemove', (dets) => {
      document.querySelector('.project-link div').classList.remove('hidden');
      var xprev = 0
      xprev = dets.clientX;
      gsap.to('.project-link div', {
        opacity: "1",
        duration: 0.4,
        left: dets.clientX
      });
    })
    document.querySelector('.project-link').addEventListener('mouseout', (e) => {
      document.querySelector('.project-link div').classList.add('hidden');
    })
  })
  return (
    <div className='px-8 project'>
      <div className='py-2 border-y-2 border-black'>
        <h3>LATEST WORKS</h3>
        <div className='py-8'>
          <ul className='flex flex-col gap-8'>
            <li className='relative project-link'>
              <a href="https://fio.vinayaknawdhar.in" className='flex flex-col text-2xl font-bold tracking-wider gap-2 hover:translate-x-5 transition-all'>
                FIO
                <span className='text-sm'>WEB DEVELOPMENT</span>
              </a>
              {/* <div className='absolute top-[0] translate-y-[-50%] translate-x-[-50%]'>
                <img src='/fio.png' className='w-96 h-96 object-cover blur-[1px] ' />
                <a href='https://fio.vinayaknawdhar.in' target='_blank' className='px-10 py-3 bg-gray-800 text-gray-100 rounded-full border-2 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>View more</a>
              </div> */}
            </li>
            <li>
              <a href="https://vtugpt.vercel.app" className='flex flex-col text-2xl font-bold tracking-wider gap-2 hover:translate-x-5 transition-all'>
                VTU-GPT
                <span className='text-sm'>WEB DEVELOPMENT</span>
              </a>
            </li>
            <li>
              <a href="" className='flex flex-col text-2xl font-bold tracking-wider gap-2 hover:translate-x-5 transition-all'>
                Because Life Matters
                <span className='text-sm'>WEB DEVELOPMENT</span>
              </a>
            </li>
            <li>
              <a href="https://vinayaknawdhar.github.io/United-Bank-Of-DSATM/" target='_blank' className='flex flex-col text-2xl font-bold tracking-wider gap-2 hover:translate-x-5 transition-all'>
                United Banks of DSATM
                <span className='text-sm'>WEB DEVELOPMENT</span>
              </a>
            </li>
            <li>
              <a href="" className='flex flex-col text-2xl font-bold tracking-wider gap-2 hover:translate-x-5 transition-all'>
                The Pig Game
                <span className='text-sm'>WEB DEVELOPMENT</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Project