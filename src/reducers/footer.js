import Footer from '../assets/home/footer.png'
import CreateOutlined from '@material-ui/icons/CreateOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Spec from '../assets/icons/mirror.svg'
import CloseOutlined from '@material-ui/icons/CloseOutlined';

const initialState = {
    data: [
        {
            path: Footer,
            service: 'Management Service',
            details: `(Project Brief Desc) Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Integer luctus, eu`,
            amount: '$100',
            icon1: <CreateOutlined />,
            icon2: <ChatBubbleOutlineIcon />,
            icon3: <CloseOutlined />,
            icon4: Spec
        },
        {
            path: Footer,
            service: 'Plan Service',
            details: `(Project Brief Desc) Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Integer luctus, eu`,
            amount: '$100',
            icon1: <CreateOutlined />,
            icon2: <ChatBubbleOutlineIcon />,
            icon3: <CloseOutlined />,
            icon4: Spec
        }
    ]
}

export default function footer(state = initialState, action) {
    switch(action.type){
        default:
            return state
    }
}