import { v4 as uuidv4 } from 'uuid';

import ndportfolio1 from "../img/portfolio1.png"
import nflfanbase from '../img/nflfanbase.png'
import randomQ from "../img/randomQuote.png"
import img from "../../assets/img/headshot.jpg";

const data = [
    {
        id: uuidv4(),
        image: img,
        title: 'DASH App',
        description: 'nature',
    },
    {
        id: uuidv4(),
        image: img,
        title: 'Word Match Game',
        description: 'nature',
    },
    {
        id: uuidv4(),
        image: nflfanbase,
        title: 'NFL Fanbase',
        description: 'nature',
    },
    {
        id: uuidv4(),
        image: img,
        title: "Nick's Current Portfolio",
        description: 'nature',
    },
    {
        id: uuidv4(),
        image: ndportfolio1,
        title: "Nick's Old Portfolio",
        description: 'nature',
    },
    {
        id: uuidv4(),
        image: randomQ,
        title: "Random Quote Generator",
        description: 'nature',
    },

];

export default data