import React, { useState } from 'react'
import { TbMenu2 } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { motion } from 'motion/react'

function Navigation() {
    return (
        <ul className='nav-ul'>
            <li className='nav-li'>
                <a href="#home" className='nav-link'>Home</a>
            </li>

            <li className='nav-li'>
                <a href="#about" className='nav-link'>About me</a>
            </li>

            <li className='nav-li'>
                <a href="#blog" className='nav-link'>Blog</a>
            </li>

            <li className='nav-li'>
                <a href="#contact" className='nav-link'>Projects</a>
            </li>
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary'>

            <div className='mx-autoo -c-space max-w-7xl'>
                <div className='flex items-center justify-between py-2 sm:py-0'>
                    <a className='text-xl font-bold transition-colors text-neutral-400 hover:text-white' href="/">FRN</a>



                    {/* menu button */}
                    <button onClick={() => setIsOpen(!isOpen)} className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'>
                        {isOpen ? <IoMdClose className='w-6 h-6' /> : <TbMenu2 className='w-6 h-6' />}
                    </button>
                    <nav className='hidden sm:flex'>
                        <Navigation />
                    </nav>
                </div>
            </div>
            {isOpen && (
                <motion.div className='block overflow-hidden text-center sm:hidden'
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ maxHeight: '100vh' }}
                    transition={{duration: 1}}
                >
                    <nav className='pb-5'>
                        <Navigation />
                    </nav>

                </motion.div>
            )}
        </div>
    )
}

export default Navbar