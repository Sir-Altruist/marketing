import Laptop from '../assets/icons/laptop.png'
import Laptop2 from '../assets/icons/laptop2.png'

const initialState = {
    data: [
        {
            path: Laptop
        },
        {
            path: Laptop2
        },
        {
            path: Laptop
        }
    ]
}

export default function image(state = initialState, action){
    switch(action.type){
        default:
            return state
    }
}