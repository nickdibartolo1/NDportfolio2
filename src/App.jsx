// import { MantineProvider } from '@mantine/core';
// import './App.css'
// import '@mantine/core/styles.css'
// import { Card } from '@mantine/core';
// import Navbar from './components/layout/Navbar';

// function App() {

//   return (
//     <MantineProvider>
//       <div className='element-with-background'>
//         <div className='card_container'>
//           <Card shadow="sm" padding="lg" radius="md" withBorder className='card'>
//           <Navbar></Navbar>

//           </Card>
//         </div>
//       </div>
//     </MantineProvider>
//   )
// }

// export default App

import { MantineProvider, ScrollArea } from '@mantine/core';
import './App.css'
import '@mantine/core/styles.css'
import { Card } from '@mantine/core';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Resume from './components/pages/Resume';

function App() {

  return (
    <MantineProvider>
      <BrowserRouter>
        <div className='element-with-background'>
          <div className='card_container'>
            <Card shadow="sm" padding="lg" radius="md" withBorder className='card'>
              <ScrollArea >
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/resume" element={<Resume />} />
                </Routes>
              </ScrollArea>
            </Card>
          </div>
        </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
