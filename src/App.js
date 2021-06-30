import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import CustomHeader2 from './components/Basic/CustomHeader/CustomHeader2'
import CustomFooter from './components/Basic/CustomFooter/CustomFooter'
import './App.css';


function App() {

    return (
      <Router>
        <CustomHeader2 />
        {renderRoutes(routes)}
        <CustomFooter />
      </Router>
  );
}

export default App;
