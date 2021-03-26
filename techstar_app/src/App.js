import './App.css';
import Page from './components/Page';
import './assets/styles/top-side.css';
import Name from './components/Name';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/survey/:id' component={Name} />
        <Page />
      </Switch>
    </Router>
  );
}

export default App;
