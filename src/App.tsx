import React from 'react';
import routesArr from './router/route'
import { Suspense } from "react";
import { BrowserRouter as Router,Routes, Route  ,Navigate,Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>loading ...</>}>
            <Router>
                <Link to='/login'>login</Link>
                <Routes>
                    {routesArr.map((item, index) => {
                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={<item.component />}
                            />
                        );
                    })}
                    <Route key="/" path="/" element={<Navigate to="/login"/>}></Route>
                </Routes>
            </Router>
        </Suspense>
    </div>
  );
}

export default App;
