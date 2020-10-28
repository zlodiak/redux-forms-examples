import React from 'react';
import { BrowserRouter, Route, Redirect, Link } from "react-router-dom";

import Page1smart from './Components/Page1/Page1smart';
import Page2smart from './Components/Page2/Page2smart';
import Page3smart from './Components/Page3/Page3smart';
import Page4smart from './Components/Page4/Page4smart';
import Page5smart from './Components/Page5/Page5smart';
import InitializeFromStateForm from './Components/Page6/Page6smart';
import Page7smart from './Components/Page7/Page7smart';
import Page404 from './Components/Page404/Page404';


import './App.css';

function App() {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  async function showResults(values) {
    await sleep(500); // simulate server latency
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  };

  return (
    <BrowserRouter>
      <header>
        <Link to="/page1">Simple form</Link>
        <Link to="/page2">Sync validation form</Link>        
        <Link to="/page3">Field level validation form</Link>        
        <Link to="/page4">Submit validation form</Link>        
        <Link to="/page5">Async blur validation form</Link>        
        <Link to="/page6">Initialize form</Link>        
        <Link to="/page7">Array form</Link>        
      </header>
      <br/>
      <br/>
      <br/>
      <main>
        <Route exact path='/'         render={ () => <Page1smart/> }/>
        <Route exact path='/page1'    render={ () => <Page1smart/> }/>
        <Route exact path='/page2'    render={ () => <Page2smart/> }/>
        <Route exact path='/page3'    render={ () => <Page3smart/> }/>
        <Route exact path='/page4'    render={ () => <Page4smart/> }/>
        <Route exact path='/page5'    render={ () => <Page5smart/> }/>
        <Route exact path='/page6'    render={ () => <InitializeFromStateForm onSubmit={showResults}/> }/>
        <Route exact path='/page7'    render={ () => <Page7smart/> }/>
        <Route exact path='/page404'  render={ () => <Page404/> }/>
        <Redirect to='/page404' />
      </main>
    </BrowserRouter>
  );
}

export default App;
