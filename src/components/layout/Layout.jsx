import React from 'react'
import Navbars from '../Navbar'
import { Outlet } from 'react-router-dom'
import Foolters from '../Foolter'

export default function Layout() {
  return (
    <>
        <header  className='bg-gray-100 '>
        <Navbars/>
        </header>
        <main >
            <Outlet/>
        </main>
        <footer className='mt-[20px] '>
            <Foolters/>
        </footer>
    </>
  )
}
