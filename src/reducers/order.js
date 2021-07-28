import CreateOutlined from '@material-ui/icons/CreateOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Spec from '../assets/icons/mirror.svg'
import CloseOutlined from '@material-ui/icons/CloseOutlined';
import { Checkbox, Button } from '@material-ui/core'



const initialState = {
    data: [
        {
            check: <Checkbox color='default' />,
            name: 'Marketing',
            company: 'Wilmar',
            type: 'Service',
            amount: '100',
            button: <Button variant='contained' 
                    style={{ 
                    backgroundColor: '#C6E11EB2',
                    textTransform: 'inherit',
                    color: '#ffffff',
                    fontWeight: 400
                }}>
                        Pending
                    </Button>,
            icon1: <CreateOutlined />,
            icon2: <ChatBubbleOutlineIcon />,
            icon3: <CloseOutlined />,
            icon4: Spec
        },
        {
            check: <Checkbox defaultChecked color='default' />,
            name: 'Planning',
            company: 'Wilmar',
            type: 'Service',
            amount: '100',
            button: <Button variant='contained' 
                    style={{
                    backgroundColor: '#18E52CB2',
                    textTransform: 'inherit',
                    color: '#ffffff',
                    fontWeight: 400
                    }}>
                        Success
                    </Button>,
            icon1: <CreateOutlined />,
            icon2: <ChatBubbleOutlineIcon />,
            icon3: <CloseOutlined />,
            icon4: Spec
        },
        {
            check: <Checkbox color='default'  />,
            name: 'Financial',
            company: 'Amazon',
            type: 'Consult',
            amount: '50',
            button: <Button variant='contained'
                    style={{ 
                        backgroundColor: '#C6E11EB2',
                        textTransform: 'inherit',
                        color: '#ffffff',
                        fontWeight: 400
                    }}>
                        Pending
                    </Button>,
            icon1: <CreateOutlined />,
            icon2: <ChatBubbleOutlineIcon />,
            icon3: <CloseOutlined />,
            icon4: Spec
        },
        {
            check: <Checkbox defaultChecked color='default' />,
            name: 'Trade',
            company: 'Wilmar',
            type: 'Service',
            amount: '100',
            button: <Button variant='contained'
                    style={{
                        backgroundColor: '#18E52CB2',
                        textTransform: 'inherit',
                        color: '#ffffff',
                        fontWeight: 400 
                    }}>
                        Success
                    </Button>,
            icon1: <CreateOutlined />,
            icon2: <ChatBubbleOutlineIcon />,
            icon3: <CloseOutlined />,
            icon4: Spec
        },
        {
            check: <Checkbox defaultChecked color='default' />,
            name: 'Trade',
            company: 'Amazon',
            type: 'Service',
            amount: '100',
            button: <Button variant='contained' 
                    style={{
                        backgroundColor: '#18E52CB2',
                        textTransform: 'inherit',
                        color: '#ffffff',
                        fontWeight: 400 
                    }}>
                        Success
                    </Button>,
            icon1: <CreateOutlined />,
            icon2: <ChatBubbleOutlineIcon />,
            icon3: <CloseOutlined />,
            icon4: Spec
        },
        {
            check: <Checkbox color='default'  />,
            name: 'Planning',
            company: 'Wilmar',
            type: 'Consult',
            amount: '100',
            button: <Button variant='contained'
            style={{
                backgroundColor: '#EE8253B2',
                textTransform: 'inherit',
                color: '#ffffff',
                fontWeight: 400
            }}>
                Cancelled
            </Button>,
            icon1: <CreateOutlined />,
            icon2: <ChatBubbleOutlineIcon />,
            icon3: <CloseOutlined />,
            icon4: Spec
        }
    ]
}

export default function order(state = initialState, action){
    switch(action.type){
        default:
            return state
    }
}