import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import SecondNavbar from './components/SecondNavbar'
import LatestNews from './components/LatestNews'
import OnlyFromBBC from './components/OnlyFromBBC'
import MoreNews from './components/MoreNews'
import MustWatch from './components/MustWatch'
import Earth from './components/Earth'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    {/* <SecondNavbar /> */}
    <LatestNews />
    <OnlyFromBBC />
    <MoreNews />
    <MustWatch />
    <Earth />
    </>
  )
}

export default App
