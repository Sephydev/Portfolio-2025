import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import AboutMe from './components/about-me/AboutMe'

const App = () => {
  return (
    <div className="font-doto px-4 lg:px-20 min-w-screen min-h-screen">
        <Header />
        <Hero />
        <AboutMe />
    </div>

  )
}

export default App