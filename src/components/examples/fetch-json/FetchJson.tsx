import React, { useState, useEffect } from 'react'
import fakePause from '../../utils/utils'
import CodeExample from '../../utils/CodeExample'

export default function FetchAndFilter() {
  // let [fetchedArticles, setFetchedArticles] = useState<any[]>([]);
  let [articles, setArticles] = useState<any[]>([])
  let [isLoading, setLoadingStatus] = useState<boolean>(false)

  async function fetchArticles() {
    setLoadingStatus(true)
    // create a fake pause that could happen while fetching the data from the api
    const pause = await fakePause(900)
    // location of data in the public folder
    let url = '/data/articles.json'
    const response = await fetch(url) // fetch the data
    // if error occurs, do this
    if (!response.ok) {
      setLoadingStatus(false)
      console.log('Error! Could not fetch the data!')
      throw response.statusText
    }
    const json = await response.json()

    setArticles(json.results) // assign the fetched array to the variable which will be used for the map function
    setLoadingStatus(false)
  }

  // variable that will hold the list of articles
  const listOfArticles = articles.map((a) => {
    return (
      <div className="py-20 px-14 bord-rad-2 shadow- border-1 fs-9 op-90">
        <div>{a.headline}</div>
      </div>
    )
  })

  function Debug() {
    // console.log('something')
  }

  return (
    <div>
      <div className="flex-center max-width-custom">
        <div className="max-width-1">
          <div className="header-3 component-name">Fetch JSON</div>
          {/* commands-grid */}
          <div className="grid gap-12 gtc-1-1-1 my-20">
            <button className="button-1 border-1 fs-4 fw-700 transition-1" onClick={fetchArticles}>
              fetch data
            </button>
            <button className="button-1 border-1 fs-4 fw-700 transition-1" onClick={Debug}>
              Debug()
            </button>
            <div className="flex-center border-1 fw-600">
              <div className={isLoading ? 'isLoading-true' : 'isLoading-false'}>IsLoading : {isLoading.toString()}</div>
            </div>
          </div>

          {isLoading ? (
            // if isLoading = true, return this
            <div>
              <div className="fs-3 mt-30">loading ... </div>
            </div>
          ) : (
            // if isLoading = false, return this
            <div>
              <div className="grid gap-14 gtc-1-1-1">{listOfArticles}</div>
            </div>
          )}

          <CodeExample filename="FetchJson.tsx" code={code} />
        </div>
      </div>
    </div>
  )
}

const code = `
import React, { useState, useEffect } from 'react'
import fakePause from '../../utils/utils'
import CodeExample from '../../utils/CodeExample'

export default function FetchAndFilter() {
  // let [fetchedArticles, setFetchedArticles] = useState<any[]>([]);
  let [articles, setArticles] = useState<any[]>([])
  let [isLoading, setLoadingStatus] = useState<boolean>(false)

  async function fetchArticles() {
    setLoadingStatus(true)
    // create a fake pause that could happen while fetching the data from the api
    const pause = await fakePause(900)
    // location of data in the public folder
    let url = '/data/articles.json'
    const response = await fetch(url) // fetch the data
    // if error occurs, do this
    if (!response.ok) {
      setLoadingStatus(false)
      console.log('Error! Could not fetch the data!')
      throw response.statusText
    }
    const json = await response.json()

    setArticles(json.results) // assign the fetched array to the variable which will be used for the map function
    setLoadingStatus(false)
  }

  // variable that will hold the list of articles
  const listOfArticles = articles.map((a) => {
    return (
      <div className="py-20 px-14 bord-rad-2 shadow- border-1 fs-9 op-90">
        <div>{a.headline}</div>
      </div>
    )
  })

  function Debug() {
    // console.log('something')
  }

  return (
    <div>
      <div className="flex-center max-width-custom">
        <div className="max-width-1">
          <div className="header-3 component-name">Fetch JSON</div>
          {/* commands-grid */}
          <div className="grid gap-12 gtc-1-1-1 my-20">
            <button className="button-1 border-1 fs-4 fw-700 transition-1" onClick={fetchArticles}>
              fetch data
            </button>
            <button className="button-1 border-1 fs-4 fw-700 transition-1" onClick={Debug}>
              Debug()
            </button>
            <div className="flex-center border-1 fw-600">
              <div className={isLoading ? 'isLoading-true' : 'isLoading-false'}>IsLoading : {isLoading.toString()}</div>
            </div>
          </div>

          {isLoading ? (
            // if isLoading = true, return this
            <div>
              <div className="fs-3 mt-30">loading ... </div>
            </div>
          ) : (
            // if isLoading = false, return this
            <div>
              <div className="grid gap-14 gtc-1-1-1">{listOfArticles}</div>
            </div>
          )}

          <CodeExample filename="FetchJson.tsx" code={code} />
        </div>
      </div>
    </div>
  )
}
`
