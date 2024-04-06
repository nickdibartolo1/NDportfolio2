import { Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import classes from './navbar.module.css';


const Navbar = () => {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <header className={classes.navbar}>
            {/* <Container size="md" className={classes.inner}> */}
            <div className={classes.navlink}>
                <Group gap={5} visibleFrom="xs">
                    <Link className={classes.text} to="/">Home</Link>
                    <Link className={classes.text} to="/about">About</Link>
                    <Link className={classes.text} to="/projects">Projects</Link>
                    <Link className={classes.text} to="/resume">Resume</Link>
                </Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </div>
            {/* </Container> */}
        </header>
    );


}

export default Navbar;
