import React from 'react'

import { flexWrapBox } from '../box/box'

const profileSection = () => {
    return (
        <div className='h-full w-full flex flex-col items-center justify-center gap-10 p-5  max-w-[1440px] mx-auto '>

            {/* Name */}
            <div className='flex flex-col items-center gap-2'>
                <div>
                    <span className='text-xl md:text-2xl '>MySelf,</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-blue-500 text-center">Krishal Deshemaru</h1>
                </div>
                <div className="flex items-center w-full">
                    <div className="grow border-t border-gray-500"></div>
                    <span className="mx-4 text-gray-500 heading-one">Backend Developer</span>
                    <div className="grow border-t border-gray-500"></div>
                </div>
            </div>
            {/* quote */}
            <div>
                <span>I am a backend developer with a passion for building robust and efficient APIs. Programming is my hobby and I love to learn new things.</span>
            </div>

            {/* Skills and Programming Languages */}
            <div className=' w-full sm:w-[70%] lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    flexWrapBox({
                        title: 'Frameworks & Libraries',
                        items: ['Node.js', 'Express.js', 'Next.js']
                    })
                }
                {
                    flexWrapBox({
                        title: 'Programming Languages',
                        items: ['JavaScript', 'PHP']
                    })
                }
            </div>

            {/* Scroll to explore with animation */}
            <div className="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce">
                <span className="text-gray-400 text-sm mb-2 text-center">Scroll to explore</span>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>

        </div>
    )
}

export default profileSection