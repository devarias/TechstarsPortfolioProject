import React from 'react';
import StartButton from './components/StartButton';
import SelectionButton from './components/SelectionButton';
import Spinner from './components/Spinner';
import './styles/App.css';
//import Calendly from './components/Calendar';
// import Navbar from './components/Navbar';
import { useAuth0 } from "@auth0/auth0-react";
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import FileUploadPage from './components/uploadFile';
import NavSider from './components/NavSider';



const { Header, Content, Footer, Sider } = Layout;



function App() {

  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) { return (<div className='container'><Spinner/></div>) };
  if (!isAuthenticated) { return (<div className='container'><StartButton/></div>) };
 

  return (
    <Router>
    <Layout>
      <Sider >
        <NavSider/>
      </Sider>
         <Layout>
            <Header >
            </Header>
            <Content className="container">
              <Switch>
                <Route path="/FileUpload">
                  <FileUploadPage/>
                </Route>
                <Route path="/Dashboard">
                  Dashboard
                </Route>
                <Route path="/">
                  <SelectionButton name='Matching' path="/Dashboard"/>
                  <SelectionButton name='Scheduling' path="/Schedule"/>
                </Route>
              </Switch>
            </Content>
            <Footer ></Footer>
          </Layout>
     </Layout>
     </Router>
  );
}

export default App;
