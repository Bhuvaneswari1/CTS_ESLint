import React from 'react'

const DisplayBlock = () => {
    const displayBlock1 = true;
    const displayBlock2 = false;
  return (
    <div>
        {displayBlock1 && <p>I am Block1</p>}
        {displayBlock2 && <p>I am Block2</p>}
    </div>
  )
}

export default DisplayBlock