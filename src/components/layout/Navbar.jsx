
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './navbar.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';



export function Navbar() {
    const [opened, { toggle }] = useDisclosure(false);


    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>

                <Group gap={5} visibleFrom="xs">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route></Route>
                        <Route></Route>
                        <Route></Route>
                    </Routes>
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
        </header>
    );
}
