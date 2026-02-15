'use client';
import { useState, useEffect } from 'react'

import ProjectBox from '../box/projectBox'

const projectSection = () => {

  const [projects, setProjects] = useState([]);
  const [frameworkName, setFrameworkName] = useState([]);
  const [activeTab, setActiveTab] = useState("Express.js");


  useEffect(() => {
    const fetchFileName = async () => {
      const response = await fetch(`/api/frameworkName`);
      const data = await response.json();
      setFrameworkName(data);
    }

    fetchFileName();
  },[])

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(`/api/project/${activeTab}`);
      const data = await response.json();
      setProjects(data);
    }
    fetchData();
  }, [activeTab])




  return (
    <div className='h-full w-full flex flex-col gap-10 px-5 py-10 max-w-[1440px] mx-auto '>

      <h1 className='heading-one border-l-8 py-2 pl-4 border-blue-500'>Projects</h1>

      <div>
        <ul className='flex gap-2 overflow-y-auto'>
          {
            frameworkName.map((file, index) => (
              <li key={index} className={`heading-two px-6 py-3 cursor-pointer ${activeTab === file.name ? 'bg-[var(--gray)]' : ''}`} onClick={() => setActiveTab(file.name)}>{file.name}</li>
            ))
          }
        </ul>

        <div className="box rounded-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left column (odd indexes) */}
            <div className="flex flex-col gap-4">
              {projects.map((project, index) =>
                index % 2 === 0 ? (
                  <ProjectBox key={index} project={project} />
                ) : null
              )}
            </div>

            {/* Right column (even indexes) */}
            <div className="flex flex-col gap-4">
              {projects.map((project, index) =>
                index % 2 !== 0 ? (
                  <ProjectBox key={index} project={project} />
                ) : null
              )}
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default projectSection