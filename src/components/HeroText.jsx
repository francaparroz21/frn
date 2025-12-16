import React from 'react'
import { FlipWords } from './FlipWords'

const HeroText = () => {
  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text '>

      {/*Desktop */}
      <div className='flex-col hidden md:flex c-space'>
        <h1 className='text-4xl font-medium'>
          Hi, My name is Francisco!
        </h1>
        <div className='flex flex-col items-start'>
          <p className='text-5xl font-medium text-neutral-300'>A developer
            <br />dedicated to thechnology and music.</p>
          <div className='text-4xl font-medium text-neutral-300'>
            <FlipWords className='font-black text-white text-8xl' words={['Web solutions.']} />
          </div>

        </div>
      </div>

      {/*Mobile */}
      <div className='flex flex-col space-y-6 md:hidden'>
        <p className='text-4xl font-medium '>Hi, My name is Francisco!</p>
        <div className='flex flex-col items-start'>
          <p className='text-4xl text-neutral-300'>A developer
            <br />dedicated to thechnology and music.</p>
          <div className='text-4xl text-neutral-300'>
            <FlipWords className='font-black text-white text-5xl' words={['Web solutions.']} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default HeroText