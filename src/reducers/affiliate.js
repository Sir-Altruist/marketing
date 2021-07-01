import AffiliateBtn from '../assets/icons/affiliate-btn.svg'

const initialState = {
    data: [
        {
            image: AffiliateBtn,
            title: 'Get 25% Commission',
            detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vitae magna tempor enim in ut viverrat pellentesque. Nunc tortor viverra lacus sapien praesent.`
        },
        {
            image: AffiliateBtn,
            title: 'Get $120 Invited',
            detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vitae magna tempor enim in ut viverrat pellentesque. Nunc tortor viverra lacus sapien praesent.`
        },
        {
            image: AffiliateBtn,
            title: 'Tracking Income',
            detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vitae magna tempor enim in ut viverrat pellentesque. Nunc tortor viverra lacus sapien praesent.`
        }
    ]
}

export default function affiliate(state = initialState, action){
    switch(action.type){
        default:
            return state
    }
}