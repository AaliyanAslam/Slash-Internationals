import React from 'react'
import Hero from './components/Hero'
import './index.css'
import About from './components/About'
import Services from './components/Services'

export default function App() {
  return (
    <>
    <div>
      
      <Hero />
      <About />
      <Services />

    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Slash International. All rights reserved.</p>
      </div>
    </footer>
    </div>

    </>
  )
}
