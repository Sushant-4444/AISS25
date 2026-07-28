import React from 'react'
import NavBar from './components/NavBar.jsx'
import HeroPage from './components/HeroPage.jsx'
import About from './components/About.jsx'
import Schedule from './components/Schedule.jsx'
import RegistrationForm from './components/RegistrationForm.jsx'
import Venue from './components/Venue.jsx'
import Footer from './components/Footer.jsx'
import CardHolder from './components/CardHolder.jsx'
import Sponsors from './components/Sponsors.jsx'
import Speakers from './components/Speakers.jsx'

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
    name: "Dr. Jainendra Shukla",
    role: "Co-Organizer",
    image: "https://www.iiitd.ac.in/sites/default/files/Jainendra_01.jpg",
    email: "jainendra@iiitd.ac.in",
    github: "",
    linkedin:"https://in.linkedin.com/in/jainendrashukla",
  },
  //  {
  //   name: "Dr. Tanmoy Kundu",
  //   role: "Hackathon Organizer",
  //   image: "https://cai.iiitd.ac.in/upload/usr/original/417515.jpeg",
  //   email: "tanmoy.kundu@iiitd.ac.in",
  //   github: "",
  //   linkedin:"https://www.linkedin.com/in/tanmoy-kundu-a1049113b/",
  // },
 {
    name: "Ms. Aayushi Shishodia",
    role: "Event Secretary",
    image: "https://cai.iiitd.ac.in/upload/usr/original/128561.jpg",
    email: "aayushi@iiitd.ac.in",
    github: "",
    linkedin:"https://www.linkedin.com/in/aayushi-shishodia-079491205/",
  }
];

  return (
   <>
   <NavBar />
   <HeroPage />
   <About />
   <Schedule />
   <RegistrationForm />
   <h2 className="text-center text-[max(5vw,40px)] font-bold text-[#F5A800] mb-[4vh]">Speakers</h2>
  <Speakers />
   <Venue />
  <h2 className="text-center text-[max(5vw,40px)] font-bold text-[#F5A800] mb-[4vh] mt-[12vh]">Team</h2>
   <CardHolder profiles={people} />
    {/* <p className='text-center'>To BE ANNOUNCED</p> */}
   {/* <Sponsors /> */}
   <Footer />
   </>
  )
}

export default App
