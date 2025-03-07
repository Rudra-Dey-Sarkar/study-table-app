"use client"
import React from 'react'
import toast from 'react-hot-toast'

function ApplyPopUp({ setIsApply }: { setIsApply: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div>
            
            <p className='text-[1.2rem] font-semibold text-center my-5'>Are you sure you want to apply for admission ?</p>

            <div className='flex justify-center gap-x-10'>
                <button
                    className='bg-red-500 w-[100px] h-[40px] text-white font-semibold rounded-[5px] hover:cursor-pointer hover:scale-105'
                    onClick={() => setIsApply(false)}>Cancel</button>

                <button
                    className='bg-green-500 w-[100px] h-[40px] text-white font-semibold rounded-[5px] hover:cursor-pointer hover:scale-105'
                    onClick={() => {
                        toast.success("Applied successfully")
                        setIsApply(false)
                        }}>Confirm</button>
            </div>
        </div>
    )
}

export default ApplyPopUp