import DashboardOutlined from '@material-ui/icons/DashboardOutlined';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenterOutlined';
import PaymentIcon from '@material-ui/icons/PaymentOutlined';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';
import { ExpandLess, ExpandMore } from '@material-ui/icons';


const getUserId = () => {
    const user = JSON.parse(localStorage.getItem('userInfo'))
    let id = null
    if(!user){
        id = null
    } else {
        id = user._id
    }
    return id
}

const menuItems = [
    {
        name: 'Dashboard',
        path: '/client/dashboard',
        icon1: <DashboardOutlined />,
        icon2: <DashboardOutlined color='primary' />
    },
    {
        name: 'Order',
        path: "/client/order/status",
        icon1: <BusinessCenterIcon />,
        icon2: <BusinessCenterIcon color='primary' />,
        iconOpen: <ExpandMore style={{ paddingTop: '.2rem', fontSize:'2rem'}} />,
        iconClose: <ExpandLess style={{ paddingTop: '.2rem', fontSize:'2rem'}} />,
        subNav: [
            {
                name: 'Status',
                path: '/client/order/status',
            },
            {
                name: 'Tracking',
                path: `/client/order/tracking/${getUserId()}`
            }
        ]
    },
    {
        name: 'Payment',
        path: '/client/payment/paypal',
        icon1: <PaymentIcon />,
        icon2: <PaymentIcon color='primary' />
    },
    {
        name: 'Settings',
        path: '/client/settings',
        icon1: <SettingsOutlined />,
        icon2: <SettingsOutlined color='primary' />
    }
]
export default menuItems;