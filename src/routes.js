// import Homepage2 from './Pages/Homepage2.js'
import ClientLogin from './Pages/Login/ClientLogin'
import MarketerLogin from './Pages/Login/MarketerLogin'
import Client from './Pages/Register/Client'
import Marketer from './Pages/Register/Marketer'
// import About from './Pages/About'
// import Service from './Pages/Service'
// import Contact from './Pages/Contact'
// import Products from './Pages/Products'
import Home from './Pages/Dashboard/Home'



const routes = [
    {
        path: '/',
        component: Homepage2,
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
        path:'/products',
        component: Products
    },
    {
        path: '/contact',
        component: Contact
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
    },
    {
        path: '/dashboard/home',
        component: Home
    }
]

export default routes