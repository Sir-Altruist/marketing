import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Homepage2 from './Pages/Homepage2'
import About from './Pages/About'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import ClientLogin from './Pages/Login/ClientLogin'
import MarketerLogin from './Pages/Login/MarketerLogin'
import Client from './Pages/Register/Client'
import Marketer from './Pages/Register/Marketer'
import Dashboard from './Pages/Dashboard/Dashboard'
// import Home from './pages/Home'
import Paypal from './Pages/Dashboard/Payment/Paypal'
import CreditCard from './Pages/Dashboard/Payment/Card'
import Status from './Pages/Dashboard/order/Status'
import Tracking from './Pages/Dashboard/order/Tracking'
import Settings from './Pages/Dashboard/Settings'
import Layout from './components/Layout'
// import { useSelector } from 'react-redux'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';


function App() {

    return (
      <>
      <Router>
        <Switch>
          <Route path='/' exact component={Homepage2} />
          <Route path='/about'  component={About} />
          <Route path='/service'  component={Service} />
          <Route path='/contact' component={Contact} />
          <Route path='/products'  component={Products} />
          <Route path='/login/client'  component={ClientLogin} />
          <Route path='/login/marketer'  component={MarketerLogin} />
          <Route path='/register/client'  component={Client} />
          <Route path='/register/marketer'  component={Marketer} />
          <Layout>
            <Switch>
            <Route path='/dashboard/client' component={Dashboard} />
            <Route path='/payment/paypal' component={Paypal} />
            <Route path='/payment/card' component={CreditCard} />
            <Route path='/order/status' component={Status} />
            <Route path='/order/tracking/:id' component={Tracking} />
            <Route path='/settings' component={Settings} />
            </Switch>
          </Layout>
        </Switch>
      </Router>
        </>
  );
}

AOS.init({
  offset: 400,
  duration: 1000
});

export default App;

