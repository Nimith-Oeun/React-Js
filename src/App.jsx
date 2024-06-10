import { useState } from 'react'
import './App.css'
import Navbars from './components/Navbar'
import Foolters from './components/Foolter'
import Slide from './components/Slide'
import CardProduct from './components/CardProduct'
import CardService from './components/CardService'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='w-[90%] m-auto '>
        <Navbars/>
        <Slide/>
      </header>
      <main className='w-[90%] m-auto mt-5 '>
        <section>
          <CardProduct/>
        </section>
        <section className='w-[90%] pb-5 mt-5'>
          <CardService/>
        </section>
        
      </main>
      <footer>
        <Foolters/> 
      </footer>
      
    </>
  )
}

export default App
