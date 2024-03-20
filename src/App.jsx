import { MantineProvider } from '@mantine/core';
import './App.css'
import '@mantine/core/styles.css'
import { Card } from '@mantine/core';
import Navbar from './components/layout/Navbar';
import { BrowserRouter,} from 'react-router-dom';



function App() {

  return (
    <MantineProvider>
      <BrowserRouter>
        <div className='element-with-background'>
          <div className='card_container'>
            <Card shadow="sm" padding="lg" radius="md" withBorder className='card'>
              <Navbar>

              </Navbar>
            </Card>
          </div>
        </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
