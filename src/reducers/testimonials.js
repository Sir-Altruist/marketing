import Allianz from '../assets/icons/allianz-blue.png'
import Walmart from '../assets/icons/walmart.png'


const initialState = {
    data: [
        {  
            src: Allianz, 
            comment: `I used to do marketing for new customer, 
            but with this i can now work with ease evrywhere and anytime i want.`,
            user: `Alex Cooper`,
            role: `Marketing Staff`
        },
        {
            src: Walmart,
            comment: `I didn't know how to sell and a dealer helped me learn 
            to run my page myself and provide me products and I need capital to start`,
            user: `John Doe`,
            role: `Marketing Staff`
        },
        {
            src: Walmart,
            comment: `I didn't know how to sell and a dealer helped me learn 
            to run my page myself and provide me products and I need capital to start`,
            user: `John Doe`,
            role: `Marketing Staff`
        },
        {
            src: Allianz,
            comment: `I used to do marketing for new customer, 
            but with this i can now work with ease evrywhere and anytime i want.`,
            user: `Alex Cooper`,
            role: `Marketing Staff`
        },
    ]
}

export default function testimonials(state = initialState, action){
    switch(action.type){
        default:
            return state
    }
} 