import React from 'react';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import Main from './main/Main';
import './Global.css';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exat path='/' component={Main} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
