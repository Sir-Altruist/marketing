import Homepage from './Pages/Homepage.js'
import ClientLogin from './Pages/ClientLogin'

const routes = [
    {
        path: '/',
        component: Homepage,
        exact: true
    },
    {
        path: '/login/client',
        component: ClientLogin
    }  

]

export default routes