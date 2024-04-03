import { Button } from "@mantine/core"
import classes from "./home.module.css"
import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import About from "./About"

const Home = () => {
    return (
        <>
            <main>
                
                <section className={classes.section_container}>
                    <h1 className={classes.header}>Nick Dibartolo</h1>
                    <h2 className={classes.sub_header}>Junior Developer</h2>
                    <div className={classes.text_container}>
                        <p className={classes.text}>I am currently a Junior Developer with over a year of hands on
                            experience!</p>
                    </div>
                    <div className={classes.button}>
                        <Link to="/about">
                            <Button style={{ backgroundColor: "#274C77" }}>About Me</Button>
                        </Link>
                    </div>
                    <div className={classes.icons}>
                        <a className={classes.individual_icon} href='https://github.com/nickdibartolo1/'>
                            <FaGithub
                                size='30px'
                            />
                        </a>
                        <a className={classes.individual_icon} href='https://www.linkedin.com/in/nicholas-dibartolo-a93310245/'>
                            <FaLinkedin
                                size='30px'
                            />
                        </a>
                    </div>
                </section>
                {/* <section className={classes.img_container}>
                    <img className={classes.img} src="image.jpg" alt="Description of your image"></img>
                </section> */}
            </main>
            {/* <About></About> */}
        </>
    )
}

export default Home


// style={{ display: "flex", position: 'relative', left: "15%", top: "5%" }}