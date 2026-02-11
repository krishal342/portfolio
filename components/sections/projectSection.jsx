'use client';
import { useState , useEffect} from 'react'

import ProjectBox from '../box/projectBox'

const projectSection = () => {

  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState('nodejs');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/project/${activeTab}`);
      const data = await response.json();
      setProjects(data);
    }
    fetchData();
  },[activeTab])

  return (
    <div className='h-full w-full flex flex-col gap-5 bg-[var(--gray)] p-5'>

      <h1 className='heading-one'>Projects</h1>

      <div>
        <ul className='flex gap-2'>
          <li className={`heading-two px-6 py-3 ${activeTab === 'nodejs' ? 'bg-[var(--gray)]' : ''}`} onClick={() => setActiveTab('nodejs')}>Node.js</li>
          <li className={`heading-two px-6 py-3 ${activeTab === 'php' ? 'bg-[var(--gray)]' : ''}`} onClick={() => setActiveTab('php')}>PHP</li>
        </ul>
        <div className="box rounded-none! ">

          {
            projects.map((project,index) => {
              return (
                <ProjectBox key={index} project={project} />
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default projectSection