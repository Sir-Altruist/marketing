import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenterOutlined';
import PaymentIcon from '@material-ui/icons/PaymentOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';


const sideMenu = [
    {
        name: 'Dashboard',
        path: '/dashboard/home',
        icon: <DashboardIcon />
    },
    {
        name: 'Order',
        path: '/dashboard/order',
        icon: <BusinessCenterIcon />,
        subMenu: [
            {
                name: 'Status',
                path: 'dashboard/order/status'
            },
            {
                name: 'Tracking',
                path: 'dashboard/order/tracking'
            }
        ]
    },
    {
        name: 'Payment',
        path: '/dashboard/payment',
        icon: <PaymentIcon />
    },
    {
        name: 'Settings',
        path: '/dashboard/settings',
        icon: <SettingsIcon />
    },
]

export default sideMenu;