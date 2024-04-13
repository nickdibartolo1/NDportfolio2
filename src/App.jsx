

import { MantineProvider } from '@mantine/core';
import './App.css'
import '@mantine/core/styles.css'
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Footer from './components/layout/Footer';

function App() {

  return (
    <MantineProvider>
      <BrowserRouter>

        <div className='primary_background'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
