import Homepage from './Pages/Homepage.js'
import ClientLogin from './Pages/Login/ClientLogin'
import About from './Pages/About'
import Service from './Pages/Service'

const routes = [
    {
        path: '/',
        component: Homepage,
        exact: true
    },
    {
        path: '/login/client',
        component: ClientLogin
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/service',
        component: Service
    }
]

export default routes