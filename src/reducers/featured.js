import Allianz from '../assets/home/allianz.png';
import Hsbc from '../assets/home/hsbc.png';
import Apple from '../assets/home/Apple.png';
import Addidas1 from '../assets/home/addidas.png';
import Addidas2 from '../assets/home/addidas-2.png';
import Microsoft from '../assets/home/microsoft.png';
import Google from '../assets/home/google.png';
import Nestle from '../assets/home/nestle.png';

const initialState = {
  data: [
      {
          src: Allianz
      },
      {
        src: Hsbc
    },
    {
        src: Apple
    },
    {
        src: Addidas1
    },
    {
        src: Addidas2
    },
    {
        src: Microsoft
    },
    {
        src: Google
    },
    {
        src: Nestle
    },
  ]
}

export default function featured(state = initialState, action) {
    switch(action.type){
        default:
            return state
    }
}