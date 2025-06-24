import React, {useContext} from 'react'
import { userContext } from './Component1'


const Component4 = () => {
    const university = useContext(userContext)
  return (
     <div>
        <h1>Component 4 - {`Hello ${university}`}</h1>
        {/* <Component3 universtiyName={universtiyName} /> */}
    </div>
  )
}

export default Component4