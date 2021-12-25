import React, { useState } from 'react'
import CodeExample from '../../utils/CodeExample'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="flex-center max-width-custom">
        <div className="max-width-1">
          <div className="header-3 component-name ">Counter</div>

          <div className="grid gap-w-14 counter-grid">
            <div className="count-box border-1 transition-1 flex-center fs-4 temp-bg-col-2 text-col-2">{count}</div>
            <button className=" border-1 transition-1" type="button" onClick={() => setCount((count) => count + 1)}>
              +1
            </button>
            <button className="border-1" type="button" onClick={() => setCount((count) => count + 10)}>
              +10
            </button>
            <button className="border-1" type="button" onClick={() => setCount((count) => count - 10)}>
              -10
            </button>
            <button className="border-1" type="button" onClick={() => setCount((count) => 0)}>
              0
            </button>
          </div>

          <CodeExample filename="Counter.tsx" code={code} />
        </div>
      </div>
    </div>
  )
}

const code = `
import React, { useState } from 'react'
import CodeExample from '../../utils/CodeExample'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="flex-center max-width-custom">
        <div className="max-width-1">
          <div className="header-3 component-name ">Counter</div>

          <div className="grid gap-w-14 counter-grid">
            <div className="count-box border-1 transition-1 flex-center fs-4 temp-bg-col-2 text-col-2">{count}</div>
            <button className=" border-1 transition-1" type="button" onClick={() => setCount((count) => count + 1)}>
              +1
            </button>
            <button className="border-1" type="button" onClick={() => setCount((count) => count + 10)}>
              +10
            </button>
            <button className="border-1" type="button" onClick={() => setCount((count) => count - 10)}>
              -10
            </button>
            <button className="border-1" type="button" onClick={() => setCount((count) => 0)}>
              0
            </button>
          </div>

          <CodeExample filename="Counter.tsx" code={code} />
        </div>
      </div>
    </div>
  )
}
`