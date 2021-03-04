import React from 'react';
//import Calendly from './components/Calendar';
// import Navbar from './components/Navbar';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import FileUploadPage from './components/uploadFile';
import StartButton from './components/StartButton';
import SelectionButton from './components/SelectionButton';
import Spinner from './components/Spinner';
import './styles/App.css';

function App() {

  const { isLoading, isAuthenticated } = useAuth0();
  

  if (isLoading) { return (<div className='container'><Spinner/></div>) };
  if (!isAuthenticated) { return (<div className='container'><StartButton/></div>) };

  return ( 
    <Router>
      <div className="header">
        <Header/>
      </div>
      <div className='container'>
      <Switch>
        <Route path="/Home">
          <FileUploadPage/>
        </Route>
        <Route path="/">
          <SelectionButton name='Matching' path="/Dashboard"/>
          <SelectionButton name='Scheduling' path="/Home"/>
        </Route>
        <Route path="/Dashboard">
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
