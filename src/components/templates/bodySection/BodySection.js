import React from 'react'

export default function BodySection({bodyNum}) {
  return (
    <div>
      <h1>{bodyNum.map(num => <p key={num}>{num.name}{num.Url}</p>)}</h1>
    </div>
  )
}
