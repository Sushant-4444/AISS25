import React, { useState } from 'react'
import NavBar from './components/Header.jsx'
import HeroPage from './components/HeroPage.jsx'
import About from './components/About.jsx'
import Schedule from './components/Registration.jsx'
import Form from './components/Contact.jsx'
import Contact from './components/Events.jsx'
import Footer from './components/Footer.jsx'
import CardHolder from './components/CardHolder.jsx'
import Sponsors from './components/Sponsors.jsx'

function App() {

  const people = [
  {
    name: "Riya Sharma",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=5",
    email: "riya@example.com",
    github: "https://github.com/riya",
    linkedin: "https://linkedin.com/in/riya",
  },
  {
    name: "Aman Singh",
    role: "Backend Engineer",
    image: "https://i.pravatar.cc/150?img=2",
    email: "aman@example.com",
    github: "https://github.com/aman",
    linkedin: "https://linkedin.com/in/aman",
  },
  {
    name: "Sara Khan",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=15",
    email: "sara@example.com",
    github: "https://github.com/sara",
    linkedin: "https://linkedin.com/in/sara",
  },
   {
    name: "Sara Khan",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=15",
    email: "sara@example.com",
    github: "https://github.com/sara",
    linkedin: "https://linkedin.com/in/sara",
  },
   {
    name: "Sara Khan",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=15",
    email: "sara@example.com",
    github: "https://github.com/sara",
    linkedin: "https://linkedin.com/in/sara",
  },
   {
    name: "Sara Khan",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=15",
    email: "sara@example.com",
    github: "https://github.com/sara",
    linkedin: "https://linkedin.com/in/sara",
  },
];

  return (
   <>
   <NavBar />
   <HeroPage />
   <About />
   <Schedule />
   <Form />
   <Contact />
   <h2 className="text-center text-[max(5vw,40px)] font-bold text-[#F5A800] mb-[4vh]">Speakers</h2>
   <CardHolder profiles={people} />
  <h2 className="text-center text-[max(5vw,40px)] font-bold text-[#F5A800] mb-[4vh] mt-[12vh]">Team</h2>
   <CardHolder profiles={people} />
   <Sponsors />
   <Footer />
   </>
  )
}

export default App
