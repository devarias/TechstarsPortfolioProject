import React from 'react';
import { isLoading, isAuthenticated } from '@auth0/auth0-react';
import Page from './components/Page'
import './styles/top-side.css';

function App() {

  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) { return (<div className='container'><Spinner/></div>) };
  if (!isAuthenticated) { return (<div className='container'><StartButton/></div>) };

  return ( 
    <>
    <Page/>
    </>
  );
}

export default App;
