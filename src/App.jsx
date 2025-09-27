import { useState } from "react"

import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import AboutMe from './components/about-me/AboutMe'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white"} font-doto lg:pt-0 min-w-screen min-h-screen max-w-screen transition-all duration-300`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <AboutMe darkMode={darkMode}/>
        <Skills darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer />
    </div>

  )
}

export default App