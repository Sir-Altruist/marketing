import HomeWorkOutlined from '@material-ui/icons/HomeWorkOutlined';
import LocalMallOutlined from '@material-ui/icons/LocalMallOutlined';
import MonetizationOnOutlined from '@material-ui/icons/MonetizationOnOutlined';

const initialState = {
    data: [
        {
            icon: <HomeWorkOutlined />,
            name: 'Company Order Offer',
            amount: '30',
            color: '#1EA5CF'
        },
        {
            icon: <LocalMallOutlined />,
            name: 'Order',
            amount: '2',
            color: '#D6ED46'
        },
        {
            icon: <MonetizationOnOutlined />,
            name: 'Order Complete',
            amount: '4',
            color: '#5A4EEC'
        },
        {
            icon: <MonetizationOnOutlined />,
            name: 'Saldo',
            amount: '$7262',
            color: '#18E52C'
        },
    ]
}

export default function board(state = initialState, action){
    switch(action.type){
        default:
            return state
    }
}