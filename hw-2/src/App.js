import { Routes, Route } from 'react-router-dom'

import Navbar from './component/NavBar'

import ButtonPage from './pages/ButtonPage'
// import AccordionPage from './pages/AccordionPage'
import PomodoroPage from './pages/PomodoroPage'
import DropdownPage from './pages/DropdownPage'
import AboutPage from './pages/AboutPage'


const App = () => {
  return (
    <div className="flex flex-col hstack ">
      <Navbar />
      <div className='col-span-5'>
        <Routes>
          <Route path="/" element={<PomodoroPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/settings" element={<AccordionPage />} /> */}
        </Routes>
      </div>
    </div>

  )
}
export default App
