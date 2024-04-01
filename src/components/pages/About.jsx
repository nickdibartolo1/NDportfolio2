
import classes from './about.module.css'
import img from '../../assets/about.png'

const About = () => {
    return (

        <main style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ flex: '0 0 auto', marginRight: '20px' }}>
                <h1 className={classes.header} style={{ textAlign: 'center' }}>About Me</h1>
                <img className={classes.img} src={img} alt="Description of your image" />
            </div>
            <div style={{ textAlign: 'center', width: '50%' }}>
                <p className={classes.text}>I was born and raised in Northern New Jersey and transitioned into coding,
                    web development, and the tech field later in college.
                    I was originally an Education major, but decided to switch as I craved something more challenging.
                    I enrolled in a Full-Stack Web Development Bootcamp at Rutgers University
                    where I received a certification in Full-Stack Web Development. I am currently working as a Junior Developer at Strategic Micro Systems,
                    an IT company in Parsippany, New Jersey. In my free time, I love to workout, play guitar, and read about history.</p>
            </div>
        </main>
    )
}

export default About
