import { Button } from "@mantine/core"
import classes from "./home.module.css"
import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Home = () => {
    return (
        <>
            <main style={{ display: "flex", position: 'relative', left: "15%", top: "5%" }}>
                <div className={classes.margin}>
                    <h1 className={classes.header}>Nick Dibartolo</h1>
                    <h2 className={classes.sub_header}>Junior Developer</h2>
                    <p className={classes.text}>I am currently a Junior Developer with over a year of hands on experience!</p>
                    <Link to="/about">
                        <Button style={{backgroundColor: "#274C77"}}>About Me</Button>
                    </Link>
                    <div className={classes.icons}>
                        <a className={classes.solo_icon} href='https://github.com/nickdibartolo1/'>
                            <FaGithub
                                size='30px'
                            />
                        </a>
                        <a className={classes.solo_icon} href='https://www.linkedin.com/in/nicholas-dibartolo-a93310245/'>
                            <FaLinkedin
                                size='30px'
                            />
                        </a>
                    </div>
                </div>
                <div className={classes.img_position}>
                    <img className={classes.img} src="image.jpg" alt="Description of your image"></img>
                </div>

            </main>
        </>
    )
}

export default Home
