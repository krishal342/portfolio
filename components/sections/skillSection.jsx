import React from 'react'

import { flexColumnBox } from '../box/box'

const skillSection = () => {
    return (
        <div className='h-full w-full flex flex-col gap-10 px-5 py-10 max-w-[1440px] mx-auto '>

            <h1 className='heading-one border-l-8 py-2 pl-4 border-blue-500'>Skills</h1>

            <div className="w-full flex flex-col items-center gap-5">
                <div className='w-full sm:w-[80%] lg:w-[70%] box items-center'>
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
                                items: ['JWT', 'OAuth','OTP']
                            })
                        }

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
                        {
                            flexColumnBox({
                                title: 'Tools',
                                items: ['Postman']
                            })
                        }

                    </div>

                </div>

            </div>
        </div>
    )
}

export default skillSection