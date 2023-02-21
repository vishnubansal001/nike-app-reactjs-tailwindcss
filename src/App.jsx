import React from 'react'
import { Hero } from './components'
import { heroapi,popularsales,toprateslaes } from './data/data'
import {Sales} from './components'


const App = () => {
  return (
    <>
     <main>
      <Hero heroapi={heroapi}/>
      <Sales endpoint={popularsales}/>
      <Sales endpoint={toprateslaes}/>
    </main> 
    </>
  )
}

export default App
