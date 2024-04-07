import img from '../../assets/headshot.jpg'
import './about.css'

const About = () => {
    return (
        <>
            <h1 className="header">About Me</h1>
            <section className='headshot_container'>
                <div className='headshot_frame'>
                    <div>
                        <div>
                            <img className="headshot" src={img} alt="Image of Nick DiBartolo" />
                        </div>
                        <p></p>
                    </div>

                    {/* <div>
                <p className="text">I was born and raised in Northern New Jersey and transitioned into coding,
                    web development, and the tech field later in college.
                    I was originally an Education major at Montclair State University, but decided to switch as I craved something more challenging.
                    I enrolled in a Full-Stack Web Development Bootcamp at Rutgers University
                    where I received a certification in Full-Stack Web Development. I am currently working as a Junior Developer at Strategic Micro Systems,
                    an IT company in Parsippany, New Jersey. In my free time, I love to workout, play guitar, and read about history.
                </p>
            </div> */}
                </div>
            </section>
        </>
    )
}

export default About
