import React, { useState, useEffect } from 'react'
import CodeExample from '../../utils/CodeExample'

export default function OnScrollExample() {
  // credits to this https://www.kindacode.com/article/react-typescript-handling-onscroll-event/

  // Generate some dummy data
  const DUMMY_DATA = Array.from({ length: 40 }, (x, i) => {
    return {
      id: i,
      title: `Item ${i}`,
    }
  })

  const [progress, setProgress] = useState(0)
  const [elementHeight, setElementHeight] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [elementTop, setElementTop] = useState(0)

  // This function is triggered when the user scrolls the element
  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const elementHeight = event.currentTarget.clientHeight
    setElementHeight(event.currentTarget.clientHeight)
    const scrollHeight = event.currentTarget.scrollHeight
    setScrollHeight(scrollHeight)
    const elementTop = event.currentTarget.scrollTop
    setElementTop(elementTop)
    //
    setProgress(((elementTop + elementHeight) / scrollHeight) * 100)
  }

  useEffect(() => {
    // scrollHandler
  })

  return (
    <div>
      <div className="flex-center max-width-custom">
        <div className="max-width-1">
          <div className="">
            {/* The container */}
            <div className="header-3 component-name">OnScroll</div>

            <div className="my-40 fs-5 italic op-65">Note that the scrollHandler function will work only if the div to which it is attached is scrollable.</div>

            <hr className="hr-2-3" />
            <div onScroll={scrollHandler} className="max-h-280 scroll-grid">
              {/* The list */}
              <div className="grid gap-20 ">
                {DUMMY_DATA.map((item) => (
                  <div key={item.id}>{item.title}</div>
                ))}
              </div>
            </div>
            <hr className="hr-2-3" />

            <div className="grid gap-24 mt-70 fs-6">
              <div className="grid scroll-variables-grid">
                <div>{elementHeight.toFixed(2)}</div>
                <div>elementHeight</div>
                <div className="fs-9 align-text-veritically italic">current height of the element in pixels, not including the overflow</div>
              </div>
              <div className="grid scroll-variables-grid">
                <div>{scrollHeight.toFixed(2)}</div>
                <div>scrollHeight</div>
                <div className="fs-9 align-text-veritically italic">The full height of the element</div>
              </div>
              <div className="grid scroll-variables-grid">
                <div>{elementTop.toFixed(2)}</div>
                <div>elementTop</div>
                <div className="fs-9 align-text-veritically italic">At what position is the top of the element currently</div>
              </div>
              <div className="grid scroll-variables-grid">
                <div>{progress.toFixed(2)}%</div>
                <div>progress</div>
                <div className="fs-9 align-text-veritically italic">((elementTop + elementHeight) / scrollHeight) * 100</div>
              </div>
            </div>
          </div>

          <CodeExample filename="onScrollExample.tsx" code={code} />
        </div>
      </div>
    </div>
  )
}


const code = `
import React, { useState, useEffect } from 'react'
import CodeExample from '../../utils/CodeExample'

export default function OnScrollExample() {
  // credits to this https://www.kindacode.com/article/react-typescript-handling-onscroll-event/

  // Generate some dummy data
  const DUMMY_DATA = Array.from({ length: 40 }, (x, i) => {
    return {
      id: i,
      title: \`Item \${i}\`,
    }
  })

  const [progress, setProgress] = useState(0)
  const [elementHeight, setElementHeight] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [elementTop, setElementTop] = useState(0)

  // This function is triggered when the user scrolls the element
  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const elementHeight = event.currentTarget.clientHeight
    setElementHeight(event.currentTarget.clientHeight)
    const scrollHeight = event.currentTarget.scrollHeight
    setScrollHeight(scrollHeight)
    const elementTop = event.currentTarget.scrollTop
    setElementTop(elementTop)
    //
    setProgress(((elementTop + elementHeight) / scrollHeight) * 100)
  }

  useEffect(() => {
    // scrollHandler
  })

  return (
    <div>
      <div className="flex-center max-width-custom">
        <div className="max-width-1">
          <div className="">
            {/* The container */}
            <div className="header-3 component-name">OnScroll</div>

            <div className="my-40 fs-5 italic op-65">Note that the scrollHandler function will work only if the div to which it is attached is scrollable.</div>

            <hr className="hr-2-3" />
            <div onScroll={scrollHandler} className="max-h-280 scroll-grid">
              {/* The list */}
              <div className="grid gap-20 ">
                {DUMMY_DATA.map((item) => (
                  <div key={item.id}>{item.title}</div>
                ))}
              </div>
            </div>
            <hr className="hr-2-3" />

            <div className="grid gap-24 mt-70 fs-6">
              <div className="grid scroll-variables-grid">
                <div>{elementHeight.toFixed(2)}</div>
                <div>elementHeight</div>
                <div className="fs-9 align-text-veritically italic">current height of the element in pixels, not including the overflow</div>
              </div>
              <div className="grid scroll-variables-grid">
                <div>{scrollHeight.toFixed(2)}</div>
                <div>scrollHeight</div>
                <div className="fs-9 align-text-veritically italic">The full height of the element</div>
              </div>
              <div className="grid scroll-variables-grid">
                <div>{elementTop.toFixed(2)}</div>
                <div>elementTop</div>
                <div className="fs-9 align-text-veritically italic">At what position is the top of the element currently</div>
              </div>
              <div className="grid scroll-variables-grid">
                <div>{progress.toFixed(2)}%</div>
                <div>progress</div>
                <div className="fs-9 align-text-veritically italic">((elementTop + elementHeight) / scrollHeight) * 100</div>
              </div>
            </div>
          </div>

          <CodeExample filename="onScrollExample.tsx" code={code} />
        </div>
      </div>
    </div>
  )
}
`