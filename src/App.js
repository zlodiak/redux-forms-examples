import React from 'react';
import { BrowserRouter, Route, Redirect, Link } from "react-router-dom";

import Page1smart from './Components/Page1/Page1smart';
import Page2smart from './Components/Page2/Page2smart';
import Page3smart from './Components/Page3/Page3smart';
import Page404 from './Components/Page404/Page404';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/page1">Simple form</Link>
        <Link to="/page2">Sync validation form</Link>        
        <Link to="/page3">Field level validation form</Link>        
      </header>
      <br/>
      <br/>
      <br/>
      <main>
        <Route exact path='/'         render={ () => <Page1smart/> }/>
        <Route exact path='/page1'    render={ () => <Page1smart/> }/>
        <Route exact path='/page2'    render={ () => <Page2smart/> }/>
        <Route exact path='/page3'    render={ () => <Page3smart/> }/>
        <Route exact path='/page404'  render={ () => <Page404/> }/>
        <Redirect to='/page404' />
      </main>
    </BrowserRouter>
  );
}

export default App;
