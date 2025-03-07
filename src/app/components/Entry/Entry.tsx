"use client"
import Link from 'next/link'
import React from 'react'

function Entry() {
    return (
        <div className='grid justify-center gap-y-5'>
            <p className='text-[2rem] text-center sm:text-[2.5rem] text-[#191919] font-[600]'>Carfted for your all academic needs</p>
            <Link href="/log-reg" 
            className="bg-[#212121] text-white m-auto w-fit py-2 px-7 rounded-[5px] hover:cursor-pointer">
                Get your Entry
            </Link >
        </div>
    )
}

export default Entry