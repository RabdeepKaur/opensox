import { Terminal } from 'lucide-react'
import React from 'react'
import PrimaryButtom from '../ui/custom-button'
import Image from 'next/image'
import Link from 'next/link'

const CTA = () => {
    return (
        <div className="w-[94%] h-[420px] mt-2 mx-auto relative bg-transparent lg:bg-gradient-to-r from-white via-[#101010] to-white z-10 flex flex-col gap-6 items-center justify-center lg:p-[60px] rounded-3xl overflow-hidden">
            <Image
                src="/assets/ctagradient.svg"
                alt='cal'
                width={100}
                height={100}
                className="absolute inset-0 w-full h-full -z-10 object-cover rounded-3xl"
            />
            <div className="space-y-2">
                <h2 className='text-4xl w-full lg:text-6xl font-medium text-balance text-center max-w-lg tracking-tighter'>Ready to Find Your Perfect Repo?</h2>
                <p className="text-center text-sm tracking-tight lg:text-xl font-light">Join 9K+ engineers saving time today.</p>
            </div>
            <Link href='/dashboard/home' className='cursor-pointer z-30'>
                <PrimaryButtom>
                    <Terminal />
                    Get Started
                </PrimaryButtom>
            </Link>
        </div>
    )
}

export default CTA