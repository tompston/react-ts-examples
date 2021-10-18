import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function CodeExample(props: any) {
  return (
    <div>
      <div className="code-block mt-40">
        <div className="header-4 code-file-name mb-8">{props.filename}</div>
        <SyntaxHighlighter language="javascript" style={docco} className="code-block-overflow">
          {props.code}
        </SyntaxHighlighter>
        <div className="mt-30"></div>
      </div>
    </div>
  )
}
