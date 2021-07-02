import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import CustomHeader2 from './components/Basic/CustomHeader/CustomHeader2'
import CustomFooter2 from './components/Basic/CustomFooter/CustomFooter2'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';


function App() {

    return (
      <Router>
        <CustomHeader2 />
        {renderRoutes(routes)}
        <CustomFooter2 />
      </Router>
  );
}

AOS.init({
  offset: 400,
  duration: 1000
});

export default App;

