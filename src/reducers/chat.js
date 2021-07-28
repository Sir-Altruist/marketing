import Brian from '../assets/home/brian.png'
import Alex from '../assets/home/alex.png'
import Marcus from '../assets/home/marcus.png'
import Julia from '../assets/home/julia.png'
import Anna from '../assets/home/anna.png'

const initialState = {
    data: [
        {
            img: Brian,
            name: 'Brian Robinson',
            company: 'Willmar Group'
        },
        {
            img: Alex,
            name: 'Alex Stanton',
            company: 'Lippo Group'
        },
        {
            img: Marcus,
            name: 'Marcus Levin',
            company: 'T&T Group'
        },
        {
            img: Julia,
            name: 'Julia Cooper',
            company: 'ATC Group'
        },
        {
            img: Anna,
            name: 'Anna White',
            company: 'Amazon'
        }
    ]
}

export default function chat(state = initialState, action){
    switch(action.type){
        default:
            return state
    }
}