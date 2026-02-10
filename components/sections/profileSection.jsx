import React from 'react'

import { flexColumnBox, flexWrapBox } from '../box/box'

const profileSection = () => {
    return (
        <div className='h-full w-full flex flex-col items-center justify-center gap-5'>

            {/* Name */}
            <div className='flex flex-col items-center gap-2'>
                <div>
                    <span className='text-lg md:text-xl '>MySelf,</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-blue-500 text-center">Krishal Deshemaru</h1>
                </div>
                <div className="flex items-center w-full">
                    <div className="grow border-t border-gray-500"></div>
                    <span className="mx-4 text-gray-500 text-2xl md:text-3xl font-bold">Backend Developer</span>
                    <div className="grow border-t border-gray-400"></div>
                </div>
            </div>

            {/* Skills and Programming Languages */}
            <div className=' w-full sm:w-[70%] lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-5 '>
                {
                    flexWrapBox({
                        title: 'Skills',
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

            {/* Backend Technologies */}
            <div className='w-full sm:w-[70%] lg:w-[60%] box items-center'>
                <h1 className='text-xl md:text-2xl font-semibold'>Backend Technologies</h1>
                <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>

                    {
                        flexColumnBox({
                            title: 'API',
                            items: ['REST API', 'GraphQL API']
                        })
                    }
                    {
                        flexColumnBox({
                            title: 'Database',
                            items: ['PostgreSQL', 'MongoDB']
                        })
                    }
                    {
                        flexColumnBox({
                            title: 'Authentication',
                            items: ['JWT', 'OAuth']
                        })
                    }

                </div>
            </div>

            {/* Scroll to explore with animation */}
            <div className="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce">
                <span className="text-gray-400 text-sm mb-2 text-center">Scroll to explore</span>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>

        </div>
    )
}

export default profileSection