import React from 'react'
import { Footer, Header, Whatgpt, Blog, Features, Possibility } from './containers'
import { CTA, Brand, Navbar } from './components'
import './App.css'
import './index.css'


const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />

    </div>
  )
}

export default App