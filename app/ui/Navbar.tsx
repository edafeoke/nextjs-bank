'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { BarChart, Home, User, SendHorizonal, MessageCircle, Bell } from 'lucide-react'

interface NavbarProps {
    title: string,
    description: string,
}

function Navbar({ title, description }: NavbarProps) {
    return (
        <nav className='w-full h-16 px-10 mt-5 flex flex-row items-start space-between'>
            <div className='flex flex-col justify-center justify-end h-full'>
                <h1 className='text-[20px] text-[#034B5E]'>{title}</h1>
                <p className='text-[14px] text-[#919499]'>{description}</p>
            </div>
            <div className='flex flex-row items-center justify-end flex-grow'>
                <Link href={'#'}><Bell/></Link>
                <Link href={'#'}><Image className='mt-3' width={50} height={50} alt='profile icon' src='/user.png' /></Link>
            </div>
        </nav>
    )
}

export default Navbar;