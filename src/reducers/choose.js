import Quality from '../assets/icons/quality.svg'
import Customer from '../assets/icons/customer.svg'
import Delivery from '../assets/icons/delivery.svg'
import Services from '../assets/icons/service.svg'

const initialState = {
    data: [
        {
            image: Quality,
            title: 'Best Quality Products',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quam viverra diam venenatis, venenatis id. A magna lacinia velit vitae ut at duis.`
        },
        {
            image: Customer,
            title: 'Happy Customers',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quam viverra diam venenatis, venenatis id. A magna lacinia velit vitae ut at duis.`
        },
        {
            image: Delivery,
            title: 'Fast Delivery',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quam viverra diam venenatis, venenatis id. A magna lacinia velit vitae ut at duis.`
        },
        {
            image: Services,
            title: 'Best Services',
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quam viverra diam venenatis, venenatis id. A magna lacinia velit vitae ut at duis.`
        }
    ]
}

export default function choose(state = initialState, action){
    switch(action.type){
        default:
            return state
    }
}