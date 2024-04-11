import { Link } from "react-router-dom"
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="footer__nav">
                    <Link className="footer__navlink" to="/">Home</Link>
                    <Link className="footer__navlink" to="/about">About</Link>
                    <Link className="footer__navlink" to="/projects">Projects</Link>
                    <Link className="footer__navlink" to="/resume">Resume</Link>
                </div>
                <div className="footer__thanks">
                    <p className="footer__thanks-text">
                        This portfolio was created by Nick DiBartolo to showcase his developer abilities and projects.
                        Thank you for checking out the site.
                        It is much appreaciated and I hope you enjoyed it!
                    </p>
                </div>


            </div>


        </footer>
    )
}

export default Footer
