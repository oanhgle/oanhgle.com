import * as React from 'react'
import Navbar from './navbar'
import Header from './header'
import AboutPage from './about'
import ProjectPage from './project'
import SkillPage from './skill'
import Contact from './contact'
import Footer from './footer'
import "../styles/global.css"

const Layout = ({pageTitle, children}) => {
  return (
    <main>
      <div className="fixed items-center bottom-0 left-20 hidden md:block">
        <div className="vl mt-5"></div>
      </div>
      <div className="fixed items-center bottom-0 right-20 hidden md:block">
        <a href="mailto:oanhngle@gmail.com" className="aside font-mono text-sm text-gray-500 hover:text-primary">oanhngle@gmail.com</a>
        <div className="vl mt-5"></div>
      </div>
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