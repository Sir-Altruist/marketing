import DashboardOutlined from '@material-ui/icons/DashboardOutlined';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenterOutlined';
import PaymentIcon from '@material-ui/icons/PaymentOutlined';
import SettingsOutlined from '@material-ui/icons/SettingsOutlined';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const menuItems = [
    {
        name: 'Dashboard',
        path: '/dashboard/client',
        icon1: <DashboardOutlined />,
        icon2: <DashboardOutlined color='primary' />
    },
    {
        name: 'Order',
        path: '/order/status',
        icon1: <BusinessCenterIcon />,
        icon2: <BusinessCenterIcon color='primary' />,
        iconOpen: <ExpandMore style={{ paddingTop: '.2rem', fontSize:'2rem'}} />,
        iconClose: <ExpandLess style={{ paddingTop: '.2rem', fontSize:'2rem'}} />,
        subNav: [
            {
                name: 'Status',
                path: '/order/status',
            },
            {
                name: 'Tracking',
                path: '/order/tracking'
            }
        ]
    },
    {
        name: 'Payment',
        path: '/payment/paypal',
        icon1: <PaymentIcon />,
        icon2: <PaymentIcon color='primary' />
    },
    {
        name: 'Settings',
        path: '/settings',
        icon1: <SettingsOutlined />,
        icon2: <SettingsOutlined color='primary' />
    }
]
export default menuItems;