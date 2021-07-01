import AffiliateBtn from '../assets/icons/affiliate-btn.svg'

const initialState = {
    data: [
        {
            image: AffiliateBtn,
            title: 'Best Quality',
            detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vitae magna tempor enim in ut viverrat pellentesque. Nunc tortor viverra lacus sapien praesent.`
        },
        {
            image: AffiliateBtn,
            title: 'Fast Delivery',
            detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vitae magna tempor enim in ut viverrat pellentesque. Nunc tortor viverra lacus sapien praesent.`
        },
        {
            image: AffiliateBtn,
            title: 'Best Service',
            detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vitae magna tempor enim in ut viverrat pellentesque. Nunc tortor viverra lacus sapien praesent.`
        }
    ]
}

export default function buyer(state = initialState, action){
    switch(action.type){
        default:
            return state
    }
}