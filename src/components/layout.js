import * as React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({pageTitle, children}) => {
  return (
    <main>
      <title>{pageTitle}</title>
      <Header/>
      <h1>{pageTitle}</h1>
      {children}
      <Footer />
    </main>
  )
}

export default Layout