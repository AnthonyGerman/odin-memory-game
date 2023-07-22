import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [sprite, setSprite] = useState();
  async function fetchSprite() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const pokemon = await response.json();
    const sprite = await pokemon.sprites.front_default;
    setSprite(sprite);
  }
  fetchSprite();
  
  

  return (
    <>
      <img src={sprite}/>
    </>
  )
}

export default App
