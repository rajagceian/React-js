import React from 'react'
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom'
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import NotExists from './pages/NotExists'

const App = () => {
  return (
 <div className="min-h-screen bg-linear-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotExists />} />
      </Routes>
      

      <Footer />

    </div>
  );
}

export default App
