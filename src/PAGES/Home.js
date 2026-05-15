import React from 'react'
import Hero from '../COMPONENTS/Hero'
import Courses from '../COMPONENTS/Courses'
import Adds from '../COMPONENTS/Adds'
import Reason from '../COMPONENTS/Reason'
import Start from '../COMPONENTS/Start'
import Students from '../COMPONENTS/Students'
import Identity from '../COMPONENTS/Identity'
import Tutors from '../COMPONENTS/Tutors'
function Home() {
  return (
    <main style={{overflowY:"hidden",overflowX:"hidden"}}>
        <Hero/>
        <Identity/>
        <Courses/>
        <Adds/>
        <Reason/>
        <Students/>
        <Tutors/>
        <Start/>
    </main>
  )
}

export default Home