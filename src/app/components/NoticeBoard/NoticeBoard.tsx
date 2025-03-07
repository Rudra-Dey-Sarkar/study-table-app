"use client"
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'

function NoticeBoard() {
    const router = useRouter();
    return (
        <div className='w-full h-[100vh] px-5'>
            <button
                className='flex justify-center items-center text-[1.2rem] underline font-semibold hover:cursor-pointer mb-5'
                onClick={()=>router.back()}>  <ArrowLeft size={19} /> Back</button>
            <div className='w-full h-full flex justify-center items-start'>
                <p className='text-[1.4rem] font-semibold pt-[25vh]'>Notices will be availble soon</p>
            </div>
        </div>
    )
}

export default NoticeBoard