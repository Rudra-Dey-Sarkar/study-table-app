"use client"
import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import toast from 'react-hot-toast';
import ApplyPopUp from '../ApplyPopUp/ApplyPopUp';
import Link from 'next/link';

function TextImageSection() {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isApply, setIsApply] = useState<boolean>(false);

    useEffect(() => {

        // Function to update state
        const controlResize = () => {
            if (window.innerWidth < 640) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        controlResize();

        // Add event listener
        window.addEventListener("resize", controlResize);
        return () => window.removeEventListener("resize", controlResize);

    }, []);

    return (
        <div className='grid gap-20'>

            {/* Apply confirmation pop-up for admission */}
            {isApply === true &&
                <div
                    className='flex fixed inset-0 justify-center items-center bg-black/50 z-50'
                    onClick={() => setIsApply(false)}>
                    <div
                        className='bg-white p-5 rounded-md shadow-lg'
                        onClick={(e) => e.stopPropagation()}>
                        <ApplyPopUp setIsApply={setIsApply} />
                    </div>
                </div>
            }

            {/* Optimize your performance */}
            <div className='grid sm:flex justify-between '>
                {/* Texts and Buttons*/}
                <div className='w-full sm:w-[50%] grid justify-center gap-y-5'>
                    <div className="text-center sm:text-start">
                        <p className="text-[2rem] sm:text-[3.4rem] text-[#191919] font-[600]">
                            Optimize <label className="text-[#707070]">Your Performance For </label>
                            JEE, NEET, <label className="text-[#707070]">and</label> Boards
                        </p>
                        <p className="text-[#7B7B7B]">
                            Your personal AI-Tutor for all academic needs. Whether it's school exam, boards, or competitive exams, we plan, manage, and help you clear your doubts instantly. For students of class 10th, 11th, and 12th (CBSE) and preparing for all medical or engineering entrance exams.
                        </p>
                    </div>

                    {/* Apply and sign-in buttons */}
                    <div className="max-w-fit flex gap-5 sm:pt-5">
                        {/* Apply for admission button */}
                        <button
                            className="bg-[#212121] text-white py-2 px-7 rounded-[5px] hover:cursor-pointer"
                            onClick={() => setIsApply(true)}>
                            Apply for admission
                        </button>
                        {/* Sign-in button */}
                        <Link
                            href="/log-reg"
                            className="flex items-center border-b-1 border-gray-700 hover:cursor-pointer">
                            Sign In <ArrowRight size={19} />
                        </Link>
                    </div>
                </div>

                {/* Image */}
                <div className='w-full sm:w-[50%] grid justify-center'>
                    <img src="./optimize-performance.svg" alt="" />
                </div>
            </div>

            {/* Unlimited practice section */}
            <div className='grid sm:flex justify-between items-start gap-10'>
                {/* Texts */}
                <div className='w-full sm:w-[50%] grid justify-center gap-y-5'>
                    <p className='text-[2rem] sm:text-[2.5rem] text-[#191919] font-[600]'>Unlimited practice section</p>
                    <p className='text-[#7B7B7B] w-[90%]'>For topics and subjects you go through in your school and coaching every day, we create instant practice session specially made for your days need. Our innovative AI algorithm crafts batches of 20 questions, each accompanied by instant feedback and solutions - it's like having a Home tutor 24X7.</p>
                </div>

                {/* Image */}
                <div className='w-full sm:w-[50%] grid justify-center'>
                    <img src="./ultimate-performance.svg" alt="" />
                </div>
            </div>

            {/* Personalized assessment section */}
            {isMobile === true ?
                // For mobile view
                <div className='grid sm:flex justify-between items-start gap-10'>

                    {/* Texts */}
                    <div className='w-full sm:w-[50%] grid justify-center gap-y-5'>
                        <p className='text-[2rem] sm:text-[2.5rem] text-[#191919] font-[600]'>Personalized Assessment</p>
                        <p className='text-[#7B7B7B] w-[90%]'>We measure your learning differently. Not just comparing you among your classmates and peers rather, how much you have learnt and how much have your skills in each subject have grown. We crate test based on your learning session and exam requirement to understand and modify study plan for you. The test are unquietly created for each student improve and advance their respective knowledge.</p>
                    </div>

                    {/* Image */}
                    <div className='w-full sm:w-[50%] grid justify-center'>
                        <img src="./personalized-assessment.svg" alt="" />
                    </div>
                </div>
                :
                // For desktop view
                <div className='grid sm:flex justify-between items-start gap-10'>
                    {/* Image */}
                    <div className='w-full sm:w-[50%] grid justify-center'>
                        <img src="./personalized-assessment.svg" alt="" />
                    </div>

                    {/* Texts */}
                    <div className='w-full sm:w-[50%] grid justify-center gap-y-5'>
                        <p className='text-[2rem] sm:text-[2.5rem] text-[#191919] font-[600]'>Personalized Assessment</p>
                        <p className='text-[#7B7B7B] w-[90%]'>We measure your learning differently. Not just comparing you among your classmates and peers rather, how much you have learnt and how much have your skills in each subject have grown. We crate test based on your learning session and exam requirement to understand and modify study plan for you. The test are unquietly created for each student improve and advance their respective knowledge.</p>
                    </div>
                </div>
            }

            {/* Managing students section */}
            <div className='grid sm:flex justify-between items-start gap-10'>
                {/* Texts */}
                <div className='w-full sm:w-[50%] grid justify-center gap-y-5'>
                    <p className='text-[2rem] sm:text-[2.5rem] text-[#191919] font-[600]'>Managing students academic life</p>
                    <p className='text-[#7B7B7B] w-[90%]'>There is more to study than just practicing giving test. To meet the requirement of exam, we need to carefully do the revision, repeatedly align our study plan and to understand students own learning curve. This all needs to be done along with schools test and other scholarship exams. We manage it all for you. So that you focus on learning and worry no more.</p>
                </div>

                {/* Image */}
                <div className='w-full sm:w-[50%] grid justify-center'>
                    <img src="./managing-student.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default TextImageSection