import React from 'react'
import Child from './child'
import CodeExample from '../../utils/CodeExample'

export default function ParentExample() {
  // random function
  const nameOfMyFunction = () => {
    console.log('howdy')
  }

  return (
    <div className="flex-center max-width-custom">
      <div className="max-width-1">
        <div className="header-3 component-name">Parent To Child Prop</div>

        <div className="grid gap-24">
          <Child myText="this is the first prop value" />
          <Child myText="this is the second prop value" />
          <div onClick={nameOfMyFunction} className="border-1 flex-center min-h-40">
            Click me to run console.log function
          </div>
          <div onClick={(e) => console.log(e)} className="border-1 flex-center min-h-40">
            Click me to console.log the event
          </div>
        </div>

        <CodeExample filename="parent.tsx" code={code} />

        <CodeExample filename="child.tsx" code={childCode} />
      </div>
    </div>
  )
}

// To pass down a prop (value) to another component
//    1. In the Parent component
//        define the name of the variable that will be passed down (myText) and add the needed value to it ("this is the prop value").
//    2. In the child component
//        in the main function of the component, pass the prop value + the type of the variable that will be passed down
//            export default function PropExample(props: { title: string }){}
//
//    Or you can also specify in the child component that it can accept any prop with:
//          export default function ChildComponent(props: any){}

const code = `
export default function ParentExample() {
  // random function
  const nameOfMyFunction = () => {
    console.log('howdy')
  }

  return (
    <div className="flex-center max-width-custom">
      <div className="max-width-1">
        <div className="header-3 component-name">Parent To Child Prop</div>

        <div className="grid gap-24">
          <Child myText="this is the first prop value" />
          <Child myText="this is the second prop value" />
          <div onClick={nameOfMyFunction} className="border-1 flex-center min-h-40">
            Click me to run console.log function
          </div>
          <div onClick={(e) => console.log(e)} className="border-1 flex-center min-h-40">
            Click me to console.log the event
          </div>
        </div>
        
      </div>
    </div>
  )
}

// To pass down a prop (value) to another component
//    1. In the Parent component
//        define the name of the variable that will be passed down (myText) and add the needed value to it ("this is the prop value").
//    2. In the child component
//        in the main function of the component, pass the prop value + the type of the variable that will be passed down
//            export default function PropExample(props: { title: string }){}
//
//    Or you can also specify in the child component that it can accept any prop with:
//          export default function ChildComponent(props: any){}


`

const childCode = `
export default function Child(props: { myText: string }) {
  return <div className="border-1 flex-center min-h-40">{props.myText}</div>
}
`
