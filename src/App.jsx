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
    name: "Dr. Debarka Sengupta",
    role: "Head CAI",
    image: "https://cai.iiitd.ac.in/upload/usr/original/196443.jpg",
    email: "debarka@iiitd.ac.in",
    github: "",
    linkedin: "https://www.linkedin.com/in/debarka-sengupta-3607517/",
  },
  {
    name: "Dr. Bapi Chatterjee",
    role: "Organizer",
    image: "https://cai.iiitd.ac.in/upload/usr/original/18263.jpg",
    email: "bapi@iiitd.ac.in",
    github: "",
    linkedin:"https://www.linkedin.com/in/bapichatterjee/",
  },
  {
    name: "Dr. Supratim Shit",
    role: "Hackathon Organizer",
    image: "https://cai.iiitd.ac.in/upload/usr/original/384744.jpg",
    email: "supratim@iiitd.ac.in",
    github: "",
    linkedin:"https://www.linkedin.com/in/supratim-shit-95189251/",
  },
   {
    name: "Dr. Tanmoy Kundu",
    role: "Hackathon Organizer",
    image: "https://cai.iiitd.ac.in/upload/usr/original/417515.jpeg",
    email: "tanmoy.kundu@iiitd.ac.in",
    github: "",
    linkedin:"https://www.linkedin.com/in/tanmoy-kundu-a1049113b/",
  },
 {
    name: "Ms. Aayushi Shishodia",
    role: "Event Secretary",
    image: "https://cai.iiitd.ac.in/upload/usr/original/128561.jpg",
    email: "aayushi@iiitd.ac.in",
    github: "",
    linkedin:"https://www.linkedin.com/in/aayushi-shishodia-079491205/",
  },
  {
    name: "CyFuse",
    role: "Student Club",
    image: "/CyFuseLogo.png",
    email: "cyfuse@sc.iiitd.ac.in",
    github: "",
    linkedin:"https://www.linkedin.com/company/cyfuse/",
  }
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
   {/* <CardHolder profiles={people} /> */}
  <p className='text-center'>To BE ANNOUNCED</p>
  <h2 className="text-center text-[max(5vw,40px)] font-bold text-[#F5A800] mb-[4vh] mt-[12vh]">Team</h2>
   <CardHolder profiles={people} />
    {/* <p className='text-center'>To BE ANNOUNCED</p> */}
   {/* <Sponsors /> */}
   <h2 className="text-center text-[max(5vw,40px)] font-bold text-[#F5A800] mb-[4vh]">Sponsors</h2>
   <p className='text-center'>To BE ANNOUNCED</p>
   <a href="/aiss24" className='text-center block mt-[4vh]'>See our last year Website</a>
   <Footer />
   </>
  )
}

export default App
