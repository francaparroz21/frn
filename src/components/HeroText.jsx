import React from 'react'
import { FlipWords } from './FlipWords'
import { motion } from 'motion/react'

const HeroText = () => {

  const words = ['Web solutions.','Music and mix.']
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text '>

      {/*Desktop */}
      <div className='flex-col hidden md:flex c-space'>
        <motion.h1
          variants={variants}
          initial='hidden'
          animate='visible'
          transition={{ delay: 1 }}
          className='text-4xl font-medium'>
          Hi, My name is Francisco!
        </motion.h1>
        <div className='flex flex-col items-start'>
          <motion.p
            variants={variants}
            initial='hidden'
            animate='visible'
            transition={{ delay: 1.3 }}
            className='text-5xl font-medium text-neutral-300'>A developer
            <br />dedicated to thechnology and music.</motion.p>
          <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            transition={{ delay: 1.8 }}
            className='text-4xl font-medium text-neutral-300'>
            <FlipWords className='font-black text-white text-8xl' words={words} />
          </motion.div>

        </div>
      </div>

      {/*Mobile */}
      <div className='flex flex-col space-y-6 md:hidden'>
        <motion.p
          variants={variants}
          initial='hidden'
          animate='visible'
          transition={{ delay: 1 }}
          className='text-4xl font-medium '>
          Hi, My name is Francisco!

        </motion.p>
        <motion.div
          variants={variants}
          initial='hidden'
          animate='visible'
          className='flex flex-col items-start'>
          <motion.p
            variants={variants}
            initial='hidden'
            animate='visible'
            transition={{ delay: 1.3 }}

            className='text-4xl text-neutral-300'>A developer
            <br />dedicated to thechnology and music.</motion.p>
          <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            transition={{ delay: 1.8 }}
            className='text-4xl text-neutral-300'>
            <FlipWords className='font-black text-white text-5xl' words={words} />
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default HeroText