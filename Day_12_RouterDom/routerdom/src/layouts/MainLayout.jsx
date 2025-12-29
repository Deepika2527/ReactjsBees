import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import RouterApp from '../RouterDom/RouterApp'

function MainLayout() {
  return (
    <div>
        <Header/>
        <br />
        <RouterApp/>
        <br />
        
        <Card/>
        <br />
        <Footer/>
    </div>
  )
}

export default MainLayout