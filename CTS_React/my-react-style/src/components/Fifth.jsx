import React from 'react'

const Fifth = () => {
  return (
    <button id="myId" onClick={(e)=>alert(e.target.id)}>
        Click Here
    </button>
  )
}

export default Fifth