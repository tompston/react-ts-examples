import React, { useState } from 'react'
import { projectsData } from './data'
import SingleProject from './single-project'
import CodeExample from '../../utils/CodeExample'

export default function MyProjects() {
  // variable that will hold the projects array
  const [projects, setProjects] = useState(projectsData)

  // function that will be passed down to Child as a prop
  const deleteProject = (id: number) => {
    // return a new filtered array
    const updatedProjects = projects.filter((project) => project.id !== id)
    setProjects(updatedProjects)
  }

  return (
    <div className="flex-center max-width-custom">
      <div className="max-width-1">
        <div className="header-3 component-name">For Loops on Arrays</div>
        {/* for loop code */}
        <div className="grid gap-24 ">
          {projects.map((project) => {
            return (
              //the top element shold hold the key={} value
              <SingleProject
                key={project.name}
                project_name={project.name}
                project_id={project.id}
                // if you want to pass down a function, then write a prop where both sides are the name of the function
                deleteProject={deleteProject}
              />
            )
          })}
        </div>

        <CodeExample filename="projects.tsx" code={code} />
        <CodeExample filename="single-project.tsx" code={childCode} />
        <CodeExample filename="data.ts" code={usedData} />

      </div>
    </div>
  )
}

const code = `
export default function MyProjects() {
  // variable that will hold the projects array
  const [projects, setProjects] = useState(projectsData)

  // function that will be passed down to Child as a prop
  const deleteProject = (id: number) => {
    // return a new filtered array
    const updatedProjects = projects.filter((project) => project.id !== id)
    setProjects(updatedProjects)
  }

  return (
    <div className="flex-center">
      <div className="max-width-1">
        <div className="component_file_name">03-projects.tsx</div>
        {/* for loop code */}
        <div className="grid gap-24 ">
          {projects.map((project) => {
            //   single value
            return (
              //the top element shold hold the key={} value
              <SingleProject
                key={project.name}
                project_name={project.name}
                project_id={project.id}
                // if you want to pass down a function, then write a prop where both sides are the name of the function
                deleteProject={deleteProject}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
`

const childCode = `
import React from 'react'

export default function SingleProject(props: { project_name: string; project_id: number; deleteProject: Function }) {
  return (
    <div className="grid single-project gap-20">
      <div className="flex-center border-1">{props.project_name}</div>
      <button onClick={() => props.deleteProject(props.project_id)} className="button-1 bord-rad-2 transition-1 delete-button">
        Delete
      </button>
    </div>
  )
}
`

const usedData = `
export const projectsData = [
  {
    id: 1,
    name: "First project",
  },
  {
    id: 2,
    name: "Second project",
  },
  {
    id: 3,
    name: "Third project",
  },
  {
    id: 4,
    name: "Fourth project",
  },
  {
    id: 5,
    name: "Fifth project",
  },
];

`

/* 

// example where no component is used. 

<div className="grid gap-h-24">
    {projects.map((project) => {
      
    //   single value
    return (
        //the top element shold hold the key={} value
        <div key={project.name}>
        <div>{project.name}</div>
        <div>{project.tag}</div>
        </div>
    );
    })}
</div>

*/
