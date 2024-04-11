import img from '../../assets/headshot.jpg';
import './about.css';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

const About = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <div className="about_text_alignment">
                <h1 className="about_text">About Me</h1>
            </div>
            <div className='headshot_container'>
                <div onClick={open} className='headshot_frame'>
                    <img className="headshot" src={img} alt="Image of Nick DiBartolo" />
                    <div className="headshot_text--margin">
                        <span className="headshot_text">Nick DiBartolo</span>
                    </div>
                </div>
            </div>
            <Modal size="55%" opened={opened} onClose={close} centered>
                <section className='modal_container'>
                    <img className="modal_headshot" src={img} alt="Image of Nick DiBartolo"></img>
                    <p className="text">I am a Junior Developer named Nick DiBartolo and I was born and raised in Northern New Jersey.
                        My tech journey began when I transitioned into coding and
                        web development in the later time I spent in college.
                        I was originally an Education major at Montclair State University, but decided to switch as I craved something more challenging.
                        I enrolled in a Full-Stack Web Development Bootcamp at Rutgers University
                        where I received a certification in Full-Stack Web Development.
                        I am currently working as a Junior Developer at Strategic Micro Systems,
                        an IT company in Parsippany, New Jersey. In my free time, I love to workout, play guitar, and read about history.
                    </p>
                </section>
            </Modal>
        </>
    )
}

export default About


{/* <div>
                <p className="text">I was born and raised in Northern New Jersey and transitioned into coding,
                    web development, and the tech field later in college.
                    I was originally an Education major at Montclair State University, but decided to switch as I craved something more challenging.
                    I enrolled in a Full-Stack Web Development Bootcamp at Rutgers University
                    where I received a certification in Full-Stack Web Development. I am currently working as a Junior Developer at Strategic Micro Systems,
                    an IT company in Parsippany, New Jersey. In my free time, I love to workout, play guitar, and read about history.
                </p>
            </div> */}
