import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Top from './Components/Top/Top';
import New from './Components/New/New';
import Show from './Components/Show/Show';
import Ask from './Components/Ask/Ask';
import Job from './Components/Job/Job';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
            <Route path="/" component={Top} exact={true} />
            <Route path="/top" component={Top} />
            <Route path="/new" component={New} />
            <Route path="/show" component={Show} />
            <Route path="/ask" component={Ask} />
            <Route path="/job" component={Job} />
        </Switch>      
      </div>
    </BrowserRouter>
  );
}

export default App;
