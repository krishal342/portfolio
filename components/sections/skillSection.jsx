
import React from 'react'

import { flexWrapBox } from '../box/box'

const skillSection = async () => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skill`);
    const data = await response.json();

    return (
        <div className='h-full w-full flex flex-col gap-10 px-5 py-10 max-w-[1440px] mx-auto '>

            <h1 className='heading-one border-l-8 py-2 pl-4 border-blue-500'>Skills</h1>

            <div className="w-full flex flex-col items-center gap-5">
                <div className='w-full sm:w-[80%] lg:w-[70%] box items-center'>
                    {/* <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>

                        {
                            flexWrapBox({
                                title: 'API',
                                items: ['REST API', 'GraphQL API']
                            })
                        }
                        {
                            flexWrapBox({
                                title: 'Database',
                                items: ['PostgreSQL', 'MongoDB']
                            })
                        }
                        {
                            flexWrapBox({
                                title: 'Authentication',
                                items: ['JWT', 'OAuth','OTP']
                            })
                        }

                        {
                            flexWrapBox({
                                title: 'Version Control',
                                items: ['Git', 'GitHub']
                            })
                        }
                        
                        {
                            flexWrapBox({
                                title: 'Hosting',
                                items: ['Render', 'Vercel']
                            })
                        }
                        {
                            flexWrapBox({
                                title: 'Tools',
                                items: ['Postman']
                            })
                        }

                    </div> */}
                    <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {
                            data.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {
                                            flexWrapBox({
                                                title: item.title,
                                                items: item.content
                                            })
                                        }
                                    </div>
                                )
                            })

                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default skillSection