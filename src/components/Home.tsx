import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="flex-center max-width-custom">
        <div className="max-width-1">
          <div className="component-name header-3">React-Typescript Examples</div>
          <div className="text-3">Some React examples that use Typescript and Hooks. Made for learning purpose + reference for later.</div>
          <div className="text-3">The url of the component indicates the folder in which the component/s are located.</div>
          <div className="fs-4 mt-20">
            The source code can be found{' '}
            <a href="https://github.com/tompston/react-ts-examples" target="_blank">
              here
            </a>
          </div>
          <div className="mt-20">Don't know why, but sending the url with a selected example component breaks the link, so send only the base url if you want to share this.</div>
        </div>
      </div>
    </div>
  )
}
