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
