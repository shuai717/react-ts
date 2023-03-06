import React from 'react';
import routes from './router/route'
import {Switch ,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
          {
            routes.map((item,index)=>{
              return <Route path={item.path}  key={index} component={item.component} />
            })
          }
      </Switch>
    </div>
  );
}

export default App;
