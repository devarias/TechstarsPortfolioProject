/* import whitelogo from './assets/static/WhiteLogo.png'; */
import './App.css';
/* import Login from './components/Login'
import Logout from './components/Logout' */
import Header from './components/Header'
import Footer from './components/Footer'
import Name from './components/Name';

function App() {
  return (
    <div className="App">
      <Header />
      <Name />
      {/* <img src={whitelogo} className="App-logo" alt="logo" />
      <div className="File">
      <Login />
      </div>
      <div className="File">
      <Logout /> 
      </div>*/}
      <Footer />
    </div>
  );
}

export default App;