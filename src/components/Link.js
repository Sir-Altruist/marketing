import React from 'react'
import {Route, Switch} from 'react-router-dom'
//Client's link
import Dashboard from '../Pages/Dashboard/Dashboard'
import Paypal from '../Pages/Dashboard/Payment/Paypal'
import CreditCard from '../Pages/Dashboard/Payment/Card'
import Status from '../Pages/Dashboard/order/Status'
import Tracking from '../Pages/Dashboard/order/Tracking'
import Settings from '../Pages/Dashboard/Settings'
import EditProduct from '../Pages/Dashboard/EditProduct'
import Layout from './Layout'
// Marketer's link
import MarketerDashboard from "./Marketer/Layout/Layout";
import MarketerHome from "../Pages/Marketer/Home";
import MarketerProducts from "../Pages/Marketer/Products";
import RecentProducts from "../Pages/Marketer/RecentProducts";
import MarketerPaypal from '../Pages/Marketer/Paypal'
// import Reports from "../Pages/Marketer/Reports";
// import ReportsOne from "../Pages/Marketer/ReportsOne";
// import ReportsTwo from "../Pages/Marketer/ReportsTwo";
// import ReportsThree from "../Pages/Marketer/ReportsThree";
// import ReportsFour from "../Pages/Marketer/ReportsFour";
// import Invitation from "../Pages/Marketer/Invitation";
import Payment from "../Pages/Marketer/Payment";

function Link() {
    const path = window.location.pathname.split('/')[1]
    let links = path === 'marketer' ? 
    <Switch>
    <MarketerDashboard>
  <Switch>
    <Route path='/marketer/dashboard' exact component={MarketerHome} />
    <Route path='/marketer/products' component={MarketerProducts} />
    <Route path='/marketer/recent-products' component={RecentProducts} />
    <Route path='/marketer/paypal' component={MarketerPaypal} />
    {/* <Route path='/marketer/reports' component={Reports} />
    <Route path='/marketer/reportsone' component={ReportsOne} />
    <Route path='/marketer/reportstwo' component={ReportsTwo} />
    <Route path='/marketer/reportsthree' component={ReportsThree} />
    <Route path='/marketer/reportsfour' component={ReportsFour} />
    <Route path='/marketer/invitation' component={Invitation} /> */}
    <Route path='/marketer/payment' component={Payment} />
    </Switch>
  </MarketerDashboard>
    </Switch> : path === 'client' ?
    <Switch>
    <Layout>
          <Switch>
          <Route path='/client/dashboard' component={Dashboard} />
          <Route path='/client/payment/paypal' component={Paypal} />
          <Route path='/client/payment/card' component={CreditCard} />
          <Route path='/client/order/status' component={Status} />
          <Route path='/client/order/tracking' component={Tracking} />
          <Route path='/client/settings' component={Settings} />
          <Route path='/client/editproduct/:id' component={EditProduct} />
          </Switch>
  </Layout>
    </Switch> : null
    return (
        <>
        {links}
        </>
    )
}

export default Link
