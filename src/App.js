import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Homepage2 from './Pages/Homepage2'
import About from './Pages/About'
import Service from './Pages/Service'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import NotFound from './Pages/NotFound'
import ClientLogin from './Pages/Login/ClientLogin'
import MarketerLogin from './Pages/Login/MarketerLogin'
import Client from './Pages/Register/Client'
import Marketer from './Pages/Register/Marketer'
import Link from './components/Link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';


function App() {
    return (
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
       <Link />
       <Route component={NotFound} />
      </Switch>  
    </Router>
  
  );
}


AOS.init({
  offset: 400,
  duration: 1000
});

export default App;

