import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/app/ui/Navbar'

function Users() {
    return (
        <>
            <Navbar title='Manage users' description='Manage and organize your users' />
            <div className='bg-white flex flex-grow m-10 rounded-10'></div>
        </>
    )
}

export default Users