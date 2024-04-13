import './home.css'
import { Link } from "react-router-dom"
// import { FaGithub, FaLinkedin } from 'react-icons/fa'
// import About from "./About"

const Home = () => {
    return (
        <>
            <main>
                <header className="section_container">
                    <div>
                        <h1 className="header">
                            <span className='primary_header'>Nick DiBartolo</span>
                            <span className="sub_header">Junior Developer</span>
                            <span className="text_header">I am currently a Junior Developer with over a year of hands on
                                experience!</span>
                        </h1>
                    </div>
                    <div className="main-button-container">
                        <Link to="/about">
                            <button className="main-button">About Me</button>
                        </Link>
                    </div>
                </header>


                {/* <section className="img_container">
                    <img className="img" src="image.jpg" alt="Description of your image"></img>
                </section> */}
            {/* <About></About> */}
            </main>
        </>
    )
}

export default Home

