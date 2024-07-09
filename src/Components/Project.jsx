import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Project = () => {
  gsap.registerPlugin(useGSAP)
  useGSAP(()=>{
    gsap.from('.project li',{
      x : -100,
      opacity : 0,
      stagger : 0.4
    })
  })
  return (
    <div className='px-8 relative project'>
      {/* <h1 className='flex flex-col absolute right-10 top-[50%] translate-y-[-50%] text-6xl items-center font-bold text-gray-50'><span>W</span><span>O</span><span>R</span><span>K</span><span>S</span></h1> */}
      <div className='py-2 border-y-2 border-black'>
      <h3>LATEST WORKS</h3>
      <div className='py-8'>
        <ul className='flex flex-col gap-8'>
          <li>
            <a href="" className='flex flex-col text-2xl font-bold tracking-wider gap-2 hover:translate-x-5 transition-all'>
              FIO 
              <span className='text-sm'>WEB DEVELOPMENT</span>
            </a>
          </li>
          <li>
            <a href="" className='flex flex-col text-2xl font-bold tracking-wider gap-2 hover:translate-x-5 transition-all'>
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
            <a href="" className='flex flex-col text-2xl font-bold tracking-wider gap-2 hover:translate-x-5 transition-all'>
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