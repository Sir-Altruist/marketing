import Growth from '../assets/home/growth.png';
import Creative from '../assets/home/idea.png';
import Technology from '../assets/home/react.png';
import Planning from '../assets/home/planning.png';
import Manage from '../assets/home/manage.png';

const initialState = {
    data: [
        {
            img: Growth,
            title: 'Growth',
            content1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, 
            content2: `Sed erat nibh tristique ipsum.`,
            type1: 'Financial Growth',
            type2: 'Management Growth',
            type3: 'Trust Growth',
            type4: 'Track Growth'
        },
        {
            img: Creative,
            title: 'Creative',
            content1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, 
            content2: `Sed erat nibh tristique ipsum.`,
            type1: 'Financial Creative',
            type2: 'Management Creative',
            type3: 'Trust Creative',
            type4: 'Track Creative'
        },
        {
            img: Technology,
            title: 'Technology',
            content1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, 
            content2: `Sed erat nibh tristique ipsum.`,
            type1: 'Financial Tech',
            type2: 'Management Tech',
            type3: 'Trust Tech',
            type4: 'Track Tech'
        },
        {
            img: Planning,
            title: 'Planning',
            content1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, 
            content2: `Sed erat nibh tristique ipsum.`,
            type1: 'Financial Planning',
            type2: 'Management Planning',
            type3: 'Trust Planning',
            type4: 'Track Planning'
        },
        {
            img: Manage,
            title: 'Manage',
            content1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, 
            content2: `Sed erat nibh tristique ipsum.`,
            type1: 'Financial Manage',
            type2: 'Management Manage',
            type3: 'Trust Manage',
            type4: 'Track Manage'
        }
    ]
}

export default function servicePage(state = initialState, action){
    switch(action.type){
        default:
            return state
    }
}
