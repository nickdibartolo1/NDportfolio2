import { Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <header className="navbar">

            <div className="navlink">
                <Group gap={5} visibleFrom="xs">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                    <Link className="link" to="/projects">Projects</Link>
                    <Link className="link" to="/resume">Resume</Link>
                </Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </div>

        </header>
    );


}

export default Navbar;
