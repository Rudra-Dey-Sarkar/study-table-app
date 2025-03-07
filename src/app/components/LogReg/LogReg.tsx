"use client"
import React, { useState } from 'react'
import Login from '../Login/Login'
import Register from '../Register/Regsiter'
import Link from 'next/link';

function LogReg() {
    const [exist, setExist] = useState<boolean>(true);

    function LogRegControl() {
        if (exist === true) {
            setExist(false);
        } else {
            setExist(true);
        }
    }

    return (

        <div className='grid w-full h-[100vh] justify-center items-center'>
            <div className='grid gap-y-5'>
                <p className='flex gap-x-1 font-semibold'>
                    Go Back To
                     <Link 
                     href="/"
                     className='underline text-blue-500'>
                        Main Page
                    </Link>
                </p>

                {exist === true ? <Login /> : <Register />}
                <div className='flex gap-x-1'>
                    <p>{exist === true ? "Don't have an account ? " : "Already have an account ? "}</p>
                    <button
                        className='font-semibold text-blue-500 hover:cursor-pointer'
                        onClick={() => LogRegControl()}>{exist === true ? "Register" : "Login"}</button>
                </div>
            </div>
        </div>
    )
}

export default LogReg