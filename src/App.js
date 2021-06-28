import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import CustomHeader from './components/Basic/CustomHeader/CustomHeader'
import './App.css';


function App() {

    return (
      <Router>
        <CustomHeader />
        {renderRoutes(routes)}
        {/* <CustomFooter darkMode={darkMode} /> */}
      </Router>
  );
}

export default App;
