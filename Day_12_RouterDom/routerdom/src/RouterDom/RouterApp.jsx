import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Courses from '../pages/Courses'
import Home from '../pages/Home'
import Reviews from '../pages/Reviews'
import Internship from '../pages/Internship'
import Placement from '../pages/Placement'


function RouterApp() {
  return (
    <div>

        <Routes>
            <Route path= "/" element = {<Home/>} />
            <Route path='/courses'  element ={<Courses/>}   />
            <Route path = '/review' element = {<Reviews/>} />
            <Route path = '/internship' element= {<Internship/>} />
             <Route path = '/placement' element= {<Placement/>} />

        </Routes>
        
    </div>
  )
}

export default RouterApp