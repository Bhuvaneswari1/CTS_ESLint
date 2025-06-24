import React from 'react'
const divStyle = {
    color: 'red',
    alignItems: 'center',
    display:'flex',
    flexDirection: 'column'
}

const FirstComponent = () => {
  return (
    <div style={divStyle}>
        <h1>
        FirstComponent
        </h1>
        <h2>Hello!</h2>
    </div>
  )
}

export default FirstComponent

//rafce