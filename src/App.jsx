import React from 'react'
import { Hero } from './components'
import { heroapi } from './data/data'


const App = () => {
  return (
    <>
     <main>
      <Hero heroapi={heroapi}/>
    </main> 
    </>
  )
}

export default App
