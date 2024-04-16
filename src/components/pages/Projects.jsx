// import { useEffect } from 'react';
// import { Carousel } from '@mantine/carousel';
// import './projects.css'
// import img from "../../assets/img/headshot.jpg";
// import project_data from "../../assets/data/data.js"


// function Projects() {

//     useEffect(() => {
//         const info = project_data.map((data, index) => {
//             return (
//                 <Carousel.Slide key={index}>
//                     <div className=''>
//                         <img className='img' src={data.img} />
//                         <div>sgsdga</div>
//                     </div>
//                 </Carousel.Slide>
//             )
//         })

//     }, [])


//     return (
//         <>
//             <div className="header__alignment">
//                 <h1 className="header__text">Projects</h1>
//             </div>

//             <section className='carousel__margin'>
//                 <Carousel height={800}
//                     slideSize="33.333333%"
//                     slideGap="xl"
//                     align="start"
//                     controlSize={60}
//                     className='carousel'>

//                         {info}

//                     {/* <Carousel.Slide>
//                         <div className=''>
//                             <img className='img' src={img} />
//                             <div>sgsdga</div>
//                         </div>
//                     </Carousel.Slide>

//                     <Carousel.Slide>
//                         <div className=''>
//                             <img className='img' src={img} />
//                         </div>
//                     </Carousel.Slide>

//                     <Carousel.Slide>
//                         <div className=''>
//                             <img className='img' src={img} />
//                         </div>
//                     </Carousel.Slide>

//                     <Carousel.Slide>
//                         <div className=''>
//                             <img className='img' src={img} />
//                         </div>
//                     </Carousel.Slide>

//                     <Carousel.Slide>
//                         <div className=''>
//                             <img className='img' src={img} />
//                         </div>
//                     </Carousel.Slide> */}

//                     {/* ...other slides */}
//                 </Carousel>
//             </section>
//         </>


//     );
// }

// export default Projects

import { useEffect, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import './projects.css'
// import img from "../../assets/img/headshot.jpg";
import project_data from "../../assets/data/data.js"

function Projects() {
    const [info, setInfo] = useState([]);


    useEffect(() => {
        const infoData = project_data.map((data, index) => (
            <Carousel.Slide key={index}>
                <div className=''>
                    <img className='img' src={data.img} alt={`Project ${index}`} />
                    <div>{data.description}</div>
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
                    slideSize="33.333333%"
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