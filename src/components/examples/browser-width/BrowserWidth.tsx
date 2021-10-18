import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import CodeExample from '../../utils/CodeExample'
// credits to this https://www.kindacode.com/article/react-typescript-re-render-a-component-on-window-resize/

export default function BrowserWidth() {
  //
  const [browserWidth, seBrowserWidth] = useState(0)
  const [browserHeight, setBrowserHeight] = useState(0)

  // return updated browser width and height
  const resizeHanlder = () => {
    seBrowserWidth(window.innerWidth)
    setBrowserHeight(window.innerHeight)
  }

  // Listening for the window resize event
  useEffect(() => {
    // Run this function when the dimensions of the browser change to get the updated values
    resizeHanlder

    window.onresize = resizeHanlder
    // this also works ---> window.addEventListener('resize', resizeHanlder);
  }, [])

  return (
    <div>
      <div className="flex-center max-width-custom">
        <div className="max-width-1">
          <div className="header-3 component-name">Browser Width</div>

          <div className="mt-30 grid gap-20 fs-5">
            <div> width of the browser = {browserWidth}px</div>
            <div>height of the browser = {browserHeight}px </div>
          </div>

          <CodeExample filename="BrowserWidth.tsx" code={code} />
        </div>
      </div>
    </div>
  )
}

const code = `
export default function BrowserWidth() {
  //
  const [browserWidth, seBrowserWidth] = useState(0)
  const [browserHeight, setBrowserHeight] = useState(0)

  // return updated browser width and height
  const resizeHanlder = () => {
    seBrowserWidth(window.innerWidth)
    setBrowserHeight(window.innerHeight)
  }

  // Listening for the window resize event
  useEffect(() => {
    // Run this function when the dimensions of the browser change to get the updated values
    resizeHanlder

    window.onresize = resizeHanlder
    // this also works ---> window.addEventListener('resize', resizeHanlder);
  }, [])

  return (
    <div>
      <div className="flex-center max-width-custom">
        <div className="max-width-1">
          <div className="header-3 component-name">Browser Width</div>
          <div className="mt-30 grid gap-20 fs-5">
            <div> width of the browser = {browserWidth}px</div>
            <div>height of the browser = {browserHeight}px </div>
          </div>

          <CodeExample filename="BrowserWidth.tsx" code={code} />
        </div>
      </div>
    </div>
  )
}
`
