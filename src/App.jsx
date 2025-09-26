import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import AboutMe from './components/about-me/AboutMe'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div className="font-doto lg:pt-0 min-w-screen min-h-screen max-w-screen">
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Contact />
    </div>

  )
}

export default App