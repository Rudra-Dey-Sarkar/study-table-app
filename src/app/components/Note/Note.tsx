import { ArrowRight } from 'lucide-react'
import React from 'react'

function Note() {
    return (
        <div className='bg-[#2A2A2A] text-white py-10 px-5 rounded-[10px]'>
            <div className='grid w-full sm:w-[65%] gap-y-5'>
                <p className='text-[2rem] sm:text-[2.5rem] font-[600]'>How we come to this?</p>
                <p>We observed and researched for three years in a variety of student. Where The best needs more attention to do better and the student struggling needs more attention to improve their own abilities. All students need personal attention. Based on the notion of “Personal attention” we have built our algorithm and Ai tutor to cater each children uniquely…</p>
                {/* Read the full story button */}
                <button className="flex w-fit items-center border-b-1 border-white hover:cursor-pointer">
                    Read the full story <ArrowRight size={19} />
                </button>
            </div>
        </div>
    )
}

export default Note