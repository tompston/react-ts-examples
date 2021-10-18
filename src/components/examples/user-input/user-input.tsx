import React, { useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeExample from '../../utils/CodeExample'

export default function UserInput() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // console.log both values
  function ShowPostRequest() {
    let body = {
      username: username,
      password: password,
    }
    console.log(body)
  }

  return (
    <div>
      <div className="flex-center max-width-custom">
        <div className="max-width-1">
          {/*  */}
          <div className="header-3 component-name">User Input</div>
          <div className="grid user-input-grid mt-30 gap-20">
            {/* single input child - username*/}
            <div className="grid user-input-grid-child gap-30 gtc-1-1 ">
              <input className="border-1" value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
              <div>
                Value of username is {username}, lenght is {username.length}
              </div>
            </div>
            {/* single input child - password*/}
            <div className="grid user-input-grid-child gap-30 gtc-1-1 ">
              <input className="border-1" value={password} type="text" onChange={(e) => setPassword(e.target.value)} />
              <div>
                Value of password is {password}, lenght is {password.length}
              </div>
            </div>
          </div>
          {/*  */}

          <div className="fs-5 fw-600 mb-20 mt-60">post body example</div>

          <ReactMarkdown>
            {`
    {    
        username: ${username}
        password: ${password}
    }
    `}
          </ReactMarkdown>

          <div className="mb-20 mt-40">
            <button className="button-1 border-1 transition-1" onClick={ShowPostRequest}>
              console.log body
            </button>
          </div>

          <CodeExample filename="user-input.tsx" code={code} />
        </div>
      </div>
    </div>
  )
}

const code = `
export default function UserInput() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // console.log both values
  function ShowPostRequest() {
    let body = {
      username: username,
      password: password,
    }
    console.log(body)
  }

  return (
    <div>
      <div className="flex-center max-width-custom">
        <div className="max-width-1">
          {/*  */}
          <div className="header-3 component-name">User Input</div>
          <div className="grid user-input-grid mt-30 gap-20">
            {/* single input child - username*/}
            <div className="grid user-input-grid-child gap-30 gtc-1-1 ">
              <input className="border-1" value={username} type="text" onChange={(e) => setUsername(e.target.value)} />
              <div>
                Value of username is {username}, lenght is {username.length}
              </div>
            </div>
            {/* single input child - password*/}
            <div className="grid user-input-grid-child gap-30 gtc-1-1 ">
              <input className="border-1" value={password} type="text" onChange={(e) => setPassword(e.target.value)} />
              <div>
                Value of password is {password}, lenght is {password.length}
              </div>
            </div>
          </div>
          {/*  */}

          <div className="fs-5 fw-600 mb-20 mt-60">post body example</div>

          <div className="mb-20 mt-40">
            <button className="button-1 border-1 transition-1" onClick={ShowPostRequest}>
              console.log body
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
`
