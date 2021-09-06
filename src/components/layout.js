import * as React from 'react'
import Navbar from './navbar'
import Header from './header'
import AboutPage from './about'
import ProjectPage from './project'
import SkillPage from './skill'
import Contact from './contact'
import Footer from './footer'
import Fade from 'react-reveal/Fade'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import "../styles/global.css"

const Layout = ({pageTitle, children}) => {
  return (
    <main>
      <Fade bottom>
        <div className="fixed items-center bottom-0 left-20 hidden md:block">
          <ThemeToggler>
            {({theme, toggleTheme}) =>(
              <div className = "dark-button">
                <input
                  type = "checkbox"
                  id = "toggle"
                  onChange = {e => toggleTheme(e.target.checked ? "dark" : "light")}
                  checked = {theme === "dark"}
                  />
                  <label for = "toggle"></label>
              </div>
            )}
          </ThemeToggler>
          <div className="vl mt-5"></div>
        </div>
        <div className="fixed items-center bottom-0 right-20 hidden md:block" style={{color: 'var(--secondary)'}}>
          <a href="mailto:oanhngle@gmail.com" className="aside font-mono text-sm icon transform transition duration-500 hover:scale-105">oanhngle@gmail.com</a>
          <div className="vl mt-5"></div>
        </div>
      </Fade>

      <div>
        <Navbar/>
        <section id="home"><Header/></section>
        <title >{pageTitle}</title>
        {/* {children} */}
        <section id="about"><AboutPage/></section>
        <section id="project"><ProjectPage/></section>
        <section id="skills"><SkillPage/></section>
        <section id="contact"><Contact/></section>
        <Footer/>
      </div>
    </main>
  )
}

export default Layout