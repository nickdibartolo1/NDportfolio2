import { Button } from "@mantine/core"
import classes from "./home.module.css"
import { Link } from "react-router-dom"

const Home = () => {



    return (
        <>
            <main className={classes.position}>
                <div className={classes.center}>
                    <h1 className={classes.header}>Nick Dibartolo</h1>
                </div>
                <div className={classes.center}>
                    <h2 className={classes.sub_header}>Junior Developer</h2>
                </div>
                <div className={classes.center}>
                    <p>Im currently a Junior Developer with over a year of hands on experience!</p>
                </div>
                <Link to="/about">
                    <Button>About Me</Button>
                </Link>
            </main>
            <div className={classes.img_position}>
                <img className={classes.img} src="image.jpg" alt="Description of your image"></img>
            </div>
        </>
    )
}

export default Home
