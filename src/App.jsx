import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Feedback from './pages/Feedback'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'

function App() {
 
  return (
    <>
      {/* <Header /> */}
      <div id="home">
        <Home />
      </div>
      <Skills/>
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="testimonials">
      <Feedback/>
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer/>
    </>
  )
}

export default App
