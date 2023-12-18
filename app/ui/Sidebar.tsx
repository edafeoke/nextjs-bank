'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import {BarChart, Home, User, SendHorizonal, MessageCircle} from 'lucide-react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
    {
        title: 'Dashboard',
        image: Home,
        href: '/admin'
    },
    {
        title: 'Manage Users',
        image: User,
        href: '/admin/users'
    },
    {
        title: 'Transfer to Users',
        image: SendHorizonal,
        href: '/admin/transfer'
    },
    {
        title: 'History',
        image: BarChart,
        href: '/admin/history'
    },
    {
        title: 'Inbox',
        image: MessageCircle,
        href: '/admin/inbox'
    },
]

function Sidebar() {
    const pathname = usePathname()
    return (
        <div className='p-5 max-w-[256px] min-h-screen bg-white space-between text-[14px]'>
            <h1 className='my-5 flex flex-row items-start text-[#0B677E] font-semibold text-[24px] uppercase'>IBANK <span className='text-[#FCBA2D]'>Care</span> <Image src='/logo.svg' alt='logo' width={24} height={24} /></h1>
            <ul className='flex flex-col'>
                {links.map((link, i) => {
                    return <li className='hover:bg-[#FCBA2D22] p-2 rounded-10 my-2 flex flex-row items-center justify-start' key={i.toString()}> <Link className={clsx('flex items-center', {'text-[#FCBA2D]':pathname===link.href}, {'text-[#c4c4c4]':pathname!==link.href})} href={link.href} ><link.image className={clsx('w-10', {'text-[#FCBA2D]':pathname===link.href})}/>{link.title}</Link></li>
                })}
                <hr className='my-4' />
                <li className='hover:bg-[#FCBA2D22] p-2 rounded-10 my-2 flex flex-row items-center justify-start'>
                    <Link className='flex items-center text-[#c4c4c4]' href={'/'} ><Image className='mr-4 ' width={24} height={24} alt='icon' src='/Danger-Circle.svg'/>
                    Help & Support
                    </Link>
                </li>
            </ul>
            <li className='hover:bg-[#FCBA2D22] p-2 rounded-10 my-2 flex flex-row items-center justify-start'> <Link className='flex items-center text-[#c4c4c4]' href={'/'} ><Image className='mr-4 ' width={24} height={24} alt='icon' src='/login.svg'/>Logout</Link></li>
        </div>
    )
}

export default Sidebar