'use client'
import { Terminal } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import PrimaryButtom from '../ui/custom-button'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div className="w-full h-[50dvh] lg:h-[69dvh] relative overflow-hidden z-10 p-4 lg:p-[60px] flex flex-col items-center justify-center gap-6 ">
            <Image
                src="/assets/bgmain.svg"
                alt="background"
                fill
                className="object-cover max-md:object-top w-full h-full absolute -z-10 opacity-90"
            />
            <div className="w-full lg:max-w-3xl space-y-3 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, ease: 'easeOut', type: 'spring' }}
                    className='text-5xl text-[2.8rem] lg:text-7xl lg:text-[6rem] font-medium tracking-tighter'>Find your perfect Open-Source Repo</motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.6, ease: 'easeOut', type: 'spring', delay: 0.1 }}
                    className="w-full lg:text-2xl tracking-tight font-light sm:max-w-lg mx-auto lg:max-w-4xl lg:text-balance text-[#e1e1e1]">Find top open-source repos in seconds.
                    Filter by your language, framework, or niche.
                    Start contributing in minutes, not hours.</motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, ease: 'easeOut', type: 'spring', delay: 0.2 }}
            >
                <Link href='/dashboard/home' className='cursor-pointer z-30'>
                    <PrimaryButtom>
                        <Terminal />
                        Get Started
                    </PrimaryButtom>
                </Link>
            </motion.div>
            <div className="absolute h-[50%] w-full bg-gradient-to-t from-[#101010] via-transparent to-transparent bottom-0 left-1/2 -translate-x-1/2"></div>
        </div>
    )
}

export default Hero