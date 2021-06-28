import Growth from '../assets/home/growth.png';
import Creative from '../assets/home/idea.png';
import Technology from '../assets/home/react.png';
import Planning from '../assets/home/planning.png';
import Manage from '../assets/home/manage.png';

const initialState = {
    data: [
        {
            src: Growth,
            title: 'Growth',
            body1: `Lorem ipsum dolor sit amet, consectetur`,             
            body2: `adipiscing elit. Sed erat nibh tristique ipsum`
        },
        {
            src: Creative,
            title: 'Creative',
            body1: `Lorem ipsum dolor sit amet, consectetur`,             
            body2: `adipiscing elit. Sed erat nibh tristique ipsum`
        },
        {
            src: Technology,
            title: 'Technology',
            body1: `Lorem ipsum dolor sit amet, consectetur`,             
            body2: `adipiscing elit. Sed erat nibh tristique ipsum`
        },
        {
            src: Planning,
            title: 'Planning',
            body1: `Lorem ipsum dolor sit amet, consectetur`,             
            body2: `adipiscing elit. Sed erat nibh tristique ipsum`
        },
        {
            src: Manage,
            title: 'Manage',
            body1: `Lorem ipsum dolor sit amet, consectetur`,             
            body2: `adipiscing elit. Sed erat nibh tristique ipsum`
        },
    ]
}

export default function services(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}