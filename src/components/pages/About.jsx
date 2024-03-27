
import classes from './about.module.css'
import img from '../../assets/about.png'

const About = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <img className={classes.img} src={img} alt="Description of your image"></img>
        </div>
    )
}

export default About
