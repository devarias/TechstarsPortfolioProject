import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Page from './components/Page';
import Spinner from './components/Spinner';
import StartButton from './components/StartButton';
import './App.css';

function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) {
    return (
      <div className='container'>
        <Spinner />
      </div>
    );
  }
  if (!isAuthenticated) {
    return (
      <div className='container'>
        <StartButton />
      </div>
    );
  }

  return (
    <>
      <Page />
    </>
  );
}

export default App;
