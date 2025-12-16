import React from 'react'
import HeroText from './HeroText'
import ParrallaxBackground from './ParrallaxBackground'

const Hero = () => {
    return (
        <section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
            <HeroText />
            <ParrallaxBackground/>
        </section>
    )
}

export default Hero