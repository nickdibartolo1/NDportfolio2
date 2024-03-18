import { MantineProvider } from '@mantine/core';
import './App.css'
import '@mantine/core/styles.css'
import { Navbar } from './components/layout/Navbar';

function App() {

  return (
    <div className='element-with-background'>
      <MantineProvider>
        <Navbar></Navbar>
        <h1>App</h1>
      </MantineProvider>
    </div>
  )
}

export default App
