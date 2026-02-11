import React from 'react'

import { flexColumnBox } from '../box/box'

const skillSection = () => {
    return (
        <div className='h-fullw-full flex flex-col items-center justify-center gap-5 p-5'>

            {/* Backend Skills */}
            <div className='w-full sm:w-[70%] lg:w-[60%] box items-center'>
                <h1 className='heading-two'>Backend Skills</h1>
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

            {/* DevOps Tools */}
            <div className='w-full sm:w-[70%] lg:w-[60%] box items-center'>
                {/* <h1 className='text-xl md:text-2xl font-semibold'>DevOps Tools</h1> */}
                <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>

                    {
                        flexColumnBox({
                            title: 'Version Control',
                            items: ['Git', 'GitHub']
                        })
                    }
                    {
                        flexColumnBox({
                            title: 'Deployment',
                            items: ['Docker']
                        })
                    }
                    {
                        flexColumnBox({
                            title: 'Hosting',
                            items: ['Render', 'Vercel']
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default skillSection