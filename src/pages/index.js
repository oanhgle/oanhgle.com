//import component
import * as React from 'react'
import Layout from '../components/layout'
import NotFound from './404'
import Footer from '../components/footer'

//define component
const IndexPage = () => {
  return(
    <div>
    <NotFound pageTitle = 'Oanh Le'>
    </NotFound>
    <Footer></Footer>
    </div>
  )
}

//export component
export default IndexPage
