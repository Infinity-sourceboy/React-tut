// import { useState } from 'react'
import './App.css'
import {Gallery} from './component.jsx' 

function App() {
  let name = "raj"
  return (
    <>
      <h2>my name is {name}</h2>
      <button type = "button" onClick={Gallery()}>click</button>
      
    </>
  )
}
 

export default App
