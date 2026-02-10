import React from 'react'

import ProfileSection from '../components/sections/profileSection'
import ProjectSection from '../components/sections/projectSection'

const Home = () => {
    return (
        <div>
            <div className='h-screen'>
                <ProfileSection />
            </div>
            <div >
                <ProjectSection />
            </div>
        </div>
    )
}

export default Home