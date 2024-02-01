import { useState } from 'react'
import './App.css'
import CharacterGallery from './components/CharacterGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CharacterGallery />
    </>
  )
}

export default App
