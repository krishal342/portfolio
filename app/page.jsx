import React from 'react'

import ProfileSection from '../components/sections/profileSection'
import ProjectSection from '../components/sections/projectSection'
import SkillSection from '../components/sections/skillSection'
import NavBar from '../components/navBar/navBar'
import ContactSection from '@/components/sections/contactSection'


const Home = () => {
    return (
        <div className=''>
            <div className="fixed top-0 left-0 w-full z-10 bg-[var(--gray)] backdrop-blur-sm " >
                    <NavBar />
            </div>
            <div id='profile' className='h-screen bg-grid'>
                <ProfileSection />
            </div>
            <div id='skills' className="bg-[var(--bg-blue)]">
                <SkillSection />
            </div>
            <div id='projects' >
                <ProjectSection />
            </div>
            <div id='contact' className="bg-[var(--bg-blue)]">
                <ContactSection />
            </div>
        </div>
    )
}

export default Home