import React,{useState, createContext} from 'react'
import Component2 from './Component2'

export const userContext = createContext()
const Component1 = () => {
    const [universtiyName, setUniversityName] = useState('XYZ Universtiy')
  return (
    <div>
       <userContext.Provider value={universtiyName}>
        <h1>Component 1 - {`Hello ${universtiyName}`}</h1>
        <Component2 />
        </userContext.Provider>

    </div>
  )
}

export default Component1