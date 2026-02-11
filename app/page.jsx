import React from 'react'

import ProfileSection from '../components/sections/profileSection'
import ProjectSection from '../components/sections/projectSection'
import SkillSection from '../components/sections/skillSection'
import NavBar from '../components/navBar/navBar'

const Home = () => {
    return (
        <div className='max-w-[1440] mx-auto '>
            <div className="fixed top-0 left-0 w-full z-10 bg-[var(--gray)] backdrop-blur-sm " >
                <div className="max-w-[1440] mx-auto px-4">
                    <NavBar />
                </div>
            </div>
            <div className='h-screen '>
                <ProfileSection />
            </div>
            <div>
                <SkillSection />
            </div>
            <div >
                <ProjectSection />
            </div>
        </div>
    )
}

export default Home