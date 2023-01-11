import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite'
import {Spinner} from 'react-bootstrap'
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { Context } from './';
import { check } from './api/userApi';

import './App.css';


const App = observer(()=> {
  const {user} = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    check().then(() => {
      user.setUser(true);
      user.setIsAuth(true);
    }).finally(()=> setLoading(false))
  },[user]);

  if(loading) {
    return <Spinner animation={'grow'} />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
