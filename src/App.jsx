import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Hero, AboutMe, Projects, Testimonial, Footer, CantactMe, AboutMePage, ProjectDetail   } from './components'
import ScrollToTop from './components/ScrollToTop'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="fade-in">
        <div className=' xl:px-40 lg:px-20 sm:px-10 w-full pt-2 px-4 pb-0'>
          <Navbar />
          <Routes>
            <Route path='/' element={<>
              <Hero />
              <AboutMe />
              <Projects />
              <Testimonial />
            </>} />
            <Route path='/CantactMe' element={<CantactMe />} />
            <Route path='/AboutMe' element={<AboutMePage />} />
            <Route path='/ProjectDetail/:id' element={<ProjectDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}


export default App
