import Asus1 from '../assets/home/asus1.png'
import Asus2 from '../assets/home/asus2.png'
import Stars from '../assets/home/stars.png'


const initialState = {
    data: [
        {
            img: Asus1,
            item: 'Electronic',
            name: 'Laptop Asus mx56',
            rate: Stars,
            amount: '1020'
        },
        {
            img: Asus2,
            item: 'Fashion',
            name: 'Laptop Asus mx56',
            rate: Stars,
            amount: '800'
        },
        {
            img: Asus1,
            item: 'Electronic',
            name: 'Laptop Asus mx56',
            rate: Stars,
            amount: '1020'
        },
        {
            img: Asus2,
            item: 'Fashion',
            name: 'Laptop Asus mx56',
            rate: Stars,
            amount: '800'
        },
        {
            img: Asus1,
            item: 'Electronic',
            name: 'Laptop Asus mx56',
            rate: Stars,
            amount: '1020'
        },
        {
            img: Asus2,
            item: 'Fashion',
            name: 'Laptop Asus mx56',
            rate: Stars,
            amount: '800'
        }
    ]
}

export default function products(state = initialState, action){
    switch(action.type){
        default:
            return state
    }
}