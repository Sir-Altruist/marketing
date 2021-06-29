import Homepage from './Pages/Homepage.js'
import ClientLogin from './Pages/Login/ClientLogin'
import MarketerLogin from './Pages/Login/MarketerLogin'
import Client from './Pages/Register/Client'
import Marketer from './Pages/Register/Marketer'
import About from './Pages/About'
import Service from './Pages/Service'

const routes = [
    {
        path: '/',
        component: Homepage,
        exact: true
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/service',
        component: Service
    },
    {
        path: '/login/client',
        component: ClientLogin
    },
    {
        path: '/login/marketer',
        component: MarketerLogin
    },
    {
        path: '/register/client',
        component: Client
    },
    {
        path: '/register/marketer',
        component: Marketer 
    }
]

export default routes