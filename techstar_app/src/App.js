/* import whitelogo from './assets/static/WhiteLogo.png'; */
import './App.css';
/* import Login from './components/Login'
import Logout from './components/Logout' */
import Page from './components/Page';
import './assets/styles/top-side.css';
import { Header } from 'antd/lib/layout/layout';
import Name from './components/Name';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/survey/:id' component={Name} />
        <Header />
        <Page />
      </Switch>
    </Router>
  );
}

export default App;
