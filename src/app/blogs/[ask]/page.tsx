"use client"
import React, { useEffect, useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';


type PageProps = {
    params: Promise<{ ask: string }>;
};

//AI answer generation feature
async function AI(prompt: string, setPromptData: React.Dispatch<React.SetStateAction<string | null>>) {

    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_AI_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt + " withing 250 words");
    setPromptData(result.response.text());
}

// Formating prompt feature
function FormatePrompt(prompt: string) {
    let result: string = "";
    let formatedPrompt: any[] = [];
    let pathnamePrompt: any[] = []

    if (prompt?.includes("/")) {
        pathnamePrompt = prompt?.split("/");
        formatedPrompt = pathnamePrompt?.[2]?.split("-");
    } else {
        formatedPrompt = prompt.split("-");
    }

    for (let i = 0; i < formatedPrompt?.length; i++) {
        result += (formatedPrompt[i] + " ");
    }
    return result;
}

function Blogs({ params }: PageProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [promptData, setPromptData] = useState<string | null>(null);

    useEffect(() => {
        async function fetchParams() {
            const resolvedParams = await params;
            AI(FormatePrompt(resolvedParams?.ask), setPromptData);
        }
        fetchParams();
    }, [params]);

    return (
        <div className='w-full h-[100vh] px-5'>
            <div>
                <button
                className='flex justify-center items-center text-[1.2rem] underline font-semibold hover:cursor-pointer mb-5'
                onClick={()=>router.back()}>  <ArrowLeft size={19} /> Back</button>
            </div>
            {promptData !== null ?
                <div>
                    <p className='font-bold text-[2rem]'>{FormatePrompt(pathname)} ?</p>
                    <p>{promptData}</p>
                </div>
                :
                <div className='w-full h-full flex justify-center items-start'>
                    <p className='text-[1.4rem] font-semibold pt-[25vh]'>AI is writing the Blog...</p>
                </div>
            }
        </div>
    )
}

export default Blogs