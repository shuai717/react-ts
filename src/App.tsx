import { Routes, Route, Navigate} from "react-router-dom";
import routesArr from '@/router/route'
import { ConfigProvider } from 'antd';
import {Suspense} from 'react'
import 'antd/dist/reset.css';
import './App.css';


function App() {
  // 获取当前登录状态
  const online :string|null = localStorage.getItem('online')
  console.log(online,'online')
  return (
    <ConfigProvider theme={{
      token: {
        colorPrimary: '#8cc63f',
      },
    }}>
      <div className="App">
        <Suspense fallback='loading'> 
          <Routes>
            <Route key="/" path="/" element={<Navigate to={online==='1'?'/home':'/login'} />}></Route>
            {routesArr.map((item, index) => {
              if(item.chriden){
                return (
                  <Route
                    key={index}
                    path={item.path}
                    element={<item.component />}
                  >
                    {
                      item.chriden.map((item2,index2)=>{
                        return <Route
                                  key={index2}
                                  path={item2.path}
                                  element={<item2.component />}
                                />
                      })
                    }
                  </Route>
                );
              }else{
                return (
                  <Route
                    key={index}
                    path={item.path}
                    element={<item.component />}
                  />
                );
              }
            })}
          </Routes>
        </Suspense>
      </div>
    </ConfigProvider>
  );
}

export default App;
