import React from 'react'

export default function Child(props: { myText: string }) {
  return <div className="border-1 flex-center min-h-40">{props.myText}</div>
}
