// import { Container, Group, Burger } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
// import classes from './navbar.module.css';
// import { Routes, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import About from '../pages/About';
// import Projects from '../pages/Projects';
// import Resume from '../pages/Resume';

// const Navbar = () => {
//     const [opened, { toggle }] = useDisclosure(false);

//     return (
//         <header className={classes.header}>
//             <Container size="md" className={classes.inner}>
//                 <Group gap={5} visibleFrom="xs">
//                     <Routes>
//                         <Route path='/' element={<Home />} />
//                         <Route path='/home' element={<Home />} />
//                         <Route path='/about' element={<About />} />
//                         <Route path='/projects' element={<Projects />} />
//                         <Route path='/resume' element={<Resume />} />
//                     </Routes>
//                 </Group>
//                 <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
//             </Container>
//         </header>
//     );
// }

// export default Navbar;

import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './navbar.module.css'; 
import {  Link } from 'react-router-dom'; 

const Navbar = () => {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Group gap={5} visibleFrom="xs">
                    <Link to="/home">Home</Link> 
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                </Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    );
}

export default Navbar;
