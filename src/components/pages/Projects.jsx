import { Carousel } from '@mantine/carousel';
import './projects.css'
import img from "../../assets/img/headshot.jpg";
import data from "../../assets/data/data.js"

function Projects() {
    return (
        <>
            <div className="header__alignment">
                <h1 className="header__text">Projects</h1>
            </div>

            <section className='carousel__margin'>
                <Carousel height={800}
                    slideSize="33.333333%"
                    slideGap="xl"
                    align="start"
                    controlSize={60}
                    className='carousel'>

                    <Carousel.Slide>
                        <div className=''>
                            <img className='img' src={img} />
                            <div>sgsdga</div>
                        </div>
                    </Carousel.Slide>

                    <Carousel.Slide>
                        <div className=''>
                            <img className='img' src={img} />
                        </div>
                    </Carousel.Slide>

                    <Carousel.Slide>
                        <div className=''>
                            <img className='img' src={img} />
                        </div>
                    </Carousel.Slide>

                    <Carousel.Slide>
                        <div className=''>
                            <img className='img' src={img} />
                        </div>
                    </Carousel.Slide>

                    <Carousel.Slide>
                        <div className=''>
                            <img className='img' src={img} />
                        </div>
                    </Carousel.Slide>

                    {/* ...other slides */}
                </Carousel>
            </section>
        </>


    );
}

export default Projects