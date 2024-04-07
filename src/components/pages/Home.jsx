import './home.css'
import { Link } from "react-router-dom"
// import { FaGithub, FaLinkedin } from 'react-icons/fa'
// import About from "./About"

const Home = () => {
    return (
        <>
            <main>
                <section className="section_container">
                    <div>
                        <h1 className="header">
                            <span className='primary_header'>Nick Dibartolo</span>
                            <span className="sub_header">Junior Developer</span>
                            <span className="text_header"> I am currently a Junior Developer with over a year of hands on
                                experience!</span>
                        </h1>
                    </div>
                    <div className="main-button-container">
                        <Link to="/about">
                            <button className="main-button">About Me</button>
                        </Link>
                    </div>
                </section>


                {/* <section className="img_container">
                    <img className="img" src="image.jpg" alt="Description of your image"></img>
                </section> */}
            </main>
            {/* <About></About> */}
        </>
    )
}

export default Home


// style={{ display: "flex", position: 'relative', left: "15%", top: "5%" }}

{/* <div className="icons">
                        <a className="individual_icon" href='https://github.com/nickdibartolo1/'>
                            <FaGithub
                                size='30px'
                            />
                        </a>
                        <a className="individual_icon" href='https://www.linkedin.com/in/nicholas-dibartolo-a93310245/'>
                            <FaLinkedin
                                size='30px'
                            />
                        </a>
                    </div> */}