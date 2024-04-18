
import { useEffect, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import './projects.css'
// import img from "../../assets/img/headshot.jpg";
import project_data from "../../assets/data/data.js"
import { Image } from '@mantine/core';

function Projects() {
    const [info, setInfo] = useState([]);


    useEffect(() => {
        const infoData = project_data.map((data, index) => (
            <Carousel.Slide key={index}>
                <div className='projects__container'>
                    <Image className='projects__img' src={data.image} alt={`Project ${index}`} />
                    <div className='projects__content'>
                        <h3 className='projects__title'>
                            {data.title}
                        </h3>
                    </div>
                </div>
            </Carousel.Slide>
        ));
        setInfo(infoData);
    }, []);


    return (
        <>
            <div className="header__alignment">
                <h1 className="header__text">Projects</h1>
            </div>

            <section className='carousel__margin'>
                <Carousel
                    height={800}
                    slideSize='50%'
                    slideGap="xl"
                    align="start"
                    controlSize={60}
                    className='carousel'>
                    {info}
                </Carousel>
            </section>
        </>
    );
}

export default Projects;