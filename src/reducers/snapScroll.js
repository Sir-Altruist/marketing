import Two from '../assets/icons/one.png'
import One from '../assets/icons/two.png'
import Three from '../assets/icons/three.png'

const initialState = {
    data: [
        {
            img: One,
            content: `Lorem ipsum dolor sit amet, consectetur piscing elit. Adipiscing sit at facilisis varius duis ut ursus aliquam.
             Nam praesent enim nisl, ridiculus gvida lacus convallis laoreet`,
            name: 'Angelia Rossalina',
            role: 'Affiliate'
        },
        {
            img: Two,
            content: `Lorem ipsum dolor sit amet, consectetur piscing elit. Adipiscing sit at facilisis varius duis ut ursus aliquam.
             Nam praesent enim nisl, ridiculus gvida lacus convallis laoreet`,
            name: 'Angelia Rossalina',
            role: 'Affiliate'
        },
        {
            img: Three,
            content: `Lorem ipsum dolor sit amet, consectetur piscing elit. Adipiscing sit at facilisis varius duis ut ursus aliquam.
             Nam praesent enim nisl, ridiculus gvida lacus convallis laoreet`,
            name: 'Angelia Rossalina',
            role: 'Affiliate'
        },

    ]
}

export default function snap(state = initialState, action){
    switch(action.type){
        default:
        return state
    }
}